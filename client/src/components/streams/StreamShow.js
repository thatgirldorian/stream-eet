import React from 'react';
import { connect } from 'react-redux'
import { fetchOneStream } from '../../actions';

class StreamShow extends React.Component {
    componentDidMount() {
        this.props.fetchOneStream(this.props.match.params.id)
    }


    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return ( 
            <div class="show-stream">
                <h2>View a stream</h2>
                <h1>{this.props.stream.title}</h1>
                <h5>{this.props.stream.description}</h5>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchOneStream})(StreamShow)