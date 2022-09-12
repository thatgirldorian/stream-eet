import { render } from '@testing-library/react';
import React from 'react';
import { Field, reduxForm } from 'redux-form'
import './Stream.css'

class StreamCreate extends React.Component {
    renderError({ error, touched}) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }

    }

    renderInput = ({ input, label, meta })  => {

        return (
            <div className="field">
                <label className="">{label}</label>
                <input {...input} />
                {this.renderError(meta)}
            </div>
        )
    }

    //create a helper function for submission
    onSubmit(formValues) {
        console.log(formValues)
    }


    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
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
    const errors = {}

    if (!formValues.title) {
        errors.title = 'Please enter a title';
        
    } 

    if (!formValues.description) {
        errors.description = 'Please enter a description'
    }

    return errors
}


export default reduxForm({
    form: 'stream_create',
    validate
})(StreamCreate)