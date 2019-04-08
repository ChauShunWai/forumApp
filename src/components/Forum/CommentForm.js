import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'react-bootstrap'

class CommentForm extends React.Component {
    renderError = ({ error, touched }) => {
        if (touched && error) {
            return <div className="alert alert-danger">
                {error}
            </div>;
        }
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
        //this.props.reset();
    }

    renderForm = () => {
        return(
            <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                <Form.Group>
                    <Field name="Comment"
                        component={this.renderTextarea}
                        label='Comment'
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
    if (!val.Comment) {
        errors.Comment = 'ENTER COMMENT'
    }
    return errors;
}

export default reduxForm({
    form: 'CommentForm',
    validate
})(CommentForm);
