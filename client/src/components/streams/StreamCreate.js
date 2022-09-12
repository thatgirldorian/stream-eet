import React from 'react';
import { Field, reduxForm } from 'redux-form'
import './Stream.css'

class StreamCreate extends React.Component {
    renderInput({ input, label }) {
        return (
            <div className="field">
                <label className="">{label}</label>
                <input {...input} />
            </div>
        )
    }

    render() {
        return (
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Add a title" />
                <Field name="description" component={this.renderInput} label="Add a description" />
                <button className="ui button" type="submit">Create</button>
            </form>
        )
    }
}

export default reduxForm({
    form: 'stream_create'
})(StreamCreate)