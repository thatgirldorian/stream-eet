import React from 'react';
import { connect } from 'react-redux';
import { fetchAllStreams } from '../../actions';
import { Link } from 'react-router-dom'

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchAllStreams()
    }

    //Show all our streams on the screen
    renderList() {
            return this.props.streams.map(stream => {
            return (
                <div className="item stream-list" key={stream.id}>
                <i className="large middle aligned play circle outline icon" />
                <div className="content">
                    <h4 className="header">{stream.title}</h4>
                    <div className="description">{stream.description}</div>
                </div>
                </div>
            );
            });
        }
    

    render() {
        return(
            <div>
                <h2 className="stream-header">All Streams</h2>
                <div className="ui celled list">{this.renderList()}</div>
                <Link to='/streams/new'>
                    <button className="ui button primary new-stream" type="submit">Add new stream</button>
                </Link>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { streams: Object.values(state.streams) };
};

export default connect(
    mapStateToProps,
    { fetchAllStreams }
)(StreamList);