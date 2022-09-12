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

    //create a helper function for submission
    onSubmit(formValues) {
        console.log(formValues)
    }


    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="title" component={this.renderInput} label="Add a title" />
                <Field name="description" component={this.renderInput} label="Add a description" />
                <button className="ui button primary" type="submit">Create</button>
            </form>
        )
    }
}

//create a validation function
const validate = (formValues) => {
    //define an errors object 
    const errors ={}

    if (!formValues.title) {
        return errors.title = 'Please enter a title'
    } 

    if (!formValues.description) {
        return errors.description = 'Please enter a description'
    }

    return errors
}


export default reduxForm({
    form: 'stream_create'
})(StreamCreate)