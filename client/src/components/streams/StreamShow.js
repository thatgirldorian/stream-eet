import React from 'react';
import flv from 'flv.js'
import { connect } from 'react-redux'
import { fetchOneStream } from '../../actions';
import '../../style/App.css'

class StreamShow extends React.Component {
//define a constructor to set up a video reference
constructor(props) {
    super(props);

    this.videoRef = React.createRef()
}

    componentDidMount() {
        const { id } = this.props.match.params

        this.props.fetchOneStream(id)
        this.buildPlayer()
    }

    //for when the component rerenders/updates
    componentDidUpdate() {
        this.buildPlayer()
    }

    //use this to clean up any resources created by the video player
    componentWillUnmount() {
        this.player.destroy()
    }

    buildPlayer() {
        if (this.player || !this.props.stream) {
            return
        }

        const { id } = this.props.match.params

        this.player = flv.createPlayer({
            type: 'flv',
            url: `http://localhost:8000/live/${id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
    }


    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return ( 
            <div className="show-stream">
                <h2>View a stream</h2>
                <video ref={this.videoRef} style={{ width: '100%'}} controls />
                <h3>{this.props.stream.title}</h3>
                <p>{this.props.stream.description}</p>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchOneStream})(StreamShow)