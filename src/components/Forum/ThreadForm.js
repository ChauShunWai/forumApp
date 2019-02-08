import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'react-bootstrap'

class ThreadForm extends React.Component {
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return <div className="alert alert-danger">
                {error}
            </div>;
        }
    }

    renderInput = ({ input, label, meta }) => {
        return (
            <React.Fragment>
                <Form.Label>{label}</Form.Label>
                <Form.Control type="text" {...input}
                    autoComplete="off"
                />
                {this.renderError(meta)}
            </React.Fragment>
        )
    }

    renderTextarea = ({ input, label, meta }) => {
        return (
            <React.Fragment>
                <Form.Label>{label}</Form.Label>
                <Form.Control as="textarea" rows="5" {...input}
                    autoComplete="off"
                />
                {this.renderError(meta)}
            </React.Fragment>
        )
    }

    onSubmit = (val) => {
        this.props.onSubmit(val);
    }

    renderForm = () => {
        return(
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Form.Group>
                    <Field name="title"
                        component={this.renderInput}
                        label='Title'
                    />
                </Form.Group>
                <Form.Group>
                    <Field name="content"
                        component={this.renderTextarea}
                        label='Content'
                    />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        ) 
    }

    render() {
        return (
            <div>
                { this.renderForm() }
            </div>
        )
    }
}

const validate = val => {
    const errors = {};
    if (!val.title) {
        errors.title = 'ENTER TITLE'
    }
    if (!val.content) {
        errors.content = 'ENTER CONTENT'
    }
    if (val.title && val.title.length > 50) {
        errors.title = 'title must be short than 25 characters'
    }
    return errors;
}

export default reduxForm({
    form: 'ThreadFrom',
    validate
})(ThreadForm);
