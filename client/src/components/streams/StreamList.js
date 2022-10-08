import React from 'react';
import { connect } from 'react-redux';
import { fetchAllStreams } from '../../actions';

class StreamList extends React.Component {
    componentDidMount() {
        this.props.fetchAllStreams()
    }

    renderList() {
            return this.props.streams.map(stream => {
            return (
                <div className="item" key={stream.id}>
                <i className="large middle aligned icon camera" />
                <div className="content">
                    {stream.title}
                    <div className="description">{stream.description}</div>
                </div>
                </div>
            );
            });
        }
    

    render() {
        return(
            console.log(this.props.streams)
            // <div>
            //     <h2>All Streams</h2>
            //     <div className="ui celled list">{this.renderList()}</div>
            // </div>
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