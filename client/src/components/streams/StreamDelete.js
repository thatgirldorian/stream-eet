import React from 'react';
import { connect } from 'react-redux';
import Modal from '../modal';
import history from '../../history'
import { fetchOneStream, removeStream } from '../../actions'
import '../../style/App.css'


class StreamDelete extends React.Component {
    componentDidMount() {
        this.props.fetchOneStream(this.props.match.params.id)
    }

    //pull in action buttons 
    renderActions() {
        return (
            <React.Fragment>
                <button 
                    onClick={() => this.props.removeStream(this.props.match.params.id)}
                    className="ui red button action-btn">Delete</button>
                <button 
                    onClick={() => history.push('/')}
                    className="ui cancel button action-btn">Cancel</button>
            </React.Fragment>
        )
    }
    
    renderModalContent() {
        if (!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        }
        return(
            <div>
                Are you sure you want to delete <span>{this.props.stream.title}</span>? This action is permanent and you will not be able to restore your stream.
            </div>
            
        ) 
    }
    
    render() {
        return (
            <div>
            <h2 className="stream-header">Delete Stream</h2>
            <Modal
                title="Delete Stream"
                content={this.renderModalContent()}
                actions={this.renderActions()}
                onDismiss = {() => history.push('/')}
            />
        </div>
        )
        
    
    }
}

const mapStateToProps = (state, ownProps) => {
    return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, 
    { fetchOneStream, removeStream})(StreamDelete)