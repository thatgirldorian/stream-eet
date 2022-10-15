import React from 'react';
import { Form, Field } from 'react-final-form'
import '../../style/App.css'


const StreamForm = (props) => {
    const renderError = ({ error, touched}) => {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            )
        }

    }

    const renderInput = ({ input, label, meta })  => {
        const className = `field $meta.error && meta.touched ? "error" : ""}`
        return (
            <div className={className}>
                <label className="">{label}</label>
                <input {...input} />
                {renderError(meta)}
            </div>
        )
    }

    //create a helper function for submission
    const onSubmit = (formValues) => {
        props.onSubmit(formValues)
    }

    return (
        <Form
            initialValues={props.initialValues}
            onSubmit={onSubmit}
            validate={(formValues) => {
                const errors = {};

            if (!formValues.title) {
            errors.title = "Please enter a title";
            }
            
            if (!formValues.description) {
                errors.description = "Please enter a description";
            }

            return errors;
}}

    render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit} className="ui form error" autocomplete="off">
                <Field name="title" component={renderInput} label="Add a title" />
                <Field
                    name="description"
                    component={renderInput}
                    label="Add a description"
                />
                <button className="ui button primary">Submit</button>
                </form>
            )}
            />
        );
        };
        
    export default StreamForm;




