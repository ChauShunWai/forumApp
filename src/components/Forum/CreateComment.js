import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { Form, Button } from 'react-bootstrap'

class Comment extends React.Component {
    renderError = ({error, touched}) => {
        if(touched && error){
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

    onSubmit(val) {
        console.log(val)
    }

    render() {
        return (
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
}

const validate = (val) => {
    const errors = {};
    if (!val.comment) {
        errors.comment = 'ENTER COMMENT'
    }
    return errors;
}

export default reduxForm({
    form: 'createComment',
    validate
})(Comment);