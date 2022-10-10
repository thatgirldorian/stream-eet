import React from 'react';
import ReactDOM from 'react-dom';
import history from '../history'

const Modal = props => {
    return ReactDOM.createPortal(
        <div 
        onClick={() => history.push('/')}
        className="ui dimmer modals visible active">
            <div 
            onClick={(e) => e.stopPropagation()}
            className="ui standard modal visible active">
            <div className="header">Delete a stream</div>
            <div className="content">Are you sure you want to delete this stream? Please note this action is permanent and you will not be able to restore your stream.</div>
            <div className="actions">
                <div className="ui red button">Delete</div>
                <div 
                onClick={() => history.push('/')}
                className="ui cancel button">Cancel</div>
            </div>
            </div>
        </div>,
        //add a reference to the element to render this modal into
        document.querySelector('#modal')
    )
}

export default Modal