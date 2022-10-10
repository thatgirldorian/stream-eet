import React from 'react';
import { connect } from 'react-redux';
import { fetchAllStreams } from '../../actions';
import { Link } from 'react-router-dom'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchAllStreams()
    }

    //Use a helper to conditionally show buttons depending on whether a user is logged in
    renderAdminButtons(stream) {
        if (stream.userId === this.props.currentUserId) {
            return(
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/streams/delete/${stream.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    //Show all our streams on the screen
    renderList() {
            return this.props.streams.map(stream => {
            return (
                <div className="item stream-list" key={stream.id}>
                    {this.renderAdminButtons(stream)}
                <i className="large middle aligned play circle outline icon" />
                <div className="content">
                    <h4 className="header">{stream.title}</h4>
                    <div className="description">{stream.description}</div>
                </div>
                </div>
            );
            });
        }
    
        //Show a creation link if a user is logged in
        renderCreateLink() {
            if (this.props.isSignedIn) {
                return (
                <div style={{ textAlign: 'right' }}>
                    <Link className="ui button primary new-stream" to='/streams/new'>
                        Create a stream
                    </Link>
                </div>
                )
            }
        }

    render() {
        return(
            <div>
                <h2 className="stream-header">All Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                {this.renderCreateLink()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { 
        streams: Object.values(state.streams),
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn 
    };
};

export default connect(
    mapStateToProps,
    { fetchAllStreams }
)(StreamList);