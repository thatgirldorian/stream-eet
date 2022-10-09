import React from 'react';
import { connect } from 'react-redux';
import { fetchOneStream } from '../../actions'

class StreamEdit extends React.Component {
    componentDidMount() {
        this.props.fetchOneStream(this.props.match.params.id)
    }

    render() {
        if (!this.props.stream) {
            return <div>Loading...</div>
        }
        return(
            <div>
                <h2 className="stream-header">Edit stream</h2>
                <div>{this.props.stream.title}</div>
            </div>
        )
    } 

}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, {fetchOneStream})(StreamEdit)