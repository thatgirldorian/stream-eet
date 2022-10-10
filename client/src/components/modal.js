import React from 'react';
import ReactDOM from 'react-dom';

const Modal = props => {
    return ReactDOM.createPortal(
        <div className="ui dimmer modals visible active">
            <div className="ui standard modal visible active">
                Delete this stream?
            </div>
        </div>,
        //add a reference to the element to render this modal into
        document.querySelector('#modal')
    )
}

export default Modal