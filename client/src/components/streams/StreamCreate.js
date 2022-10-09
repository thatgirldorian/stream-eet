import React from 'react';
import './Stream.css'
import { connect } from 'react-redux'
import { createStream } from '../../actions'
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {

    //create a helper function for submission
    onSubmit = (formValues) => {
        this.props.createStream(formValues)
    }


    render() {
        return (
            <div>
                <h2 className="stream-header">Create a new stream</h2>
                <StreamForm onSubmit={this.onSubmit} />
            </div>
        )
    }
}


export default connect(null, {createStream})(StreamCreate)