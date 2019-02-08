import React from 'react'
import { reduxForm } from 'redux-form'
import { Form, Card } from 'react-bootstrap'
import { connect } from 'react-redux'
import CreateComment from './CreateComment'
import { loadThreads, createComment } from '../../actions/index'

class Thread extends React.Component {
    renderError = ({error, touched}) => {
        if(touched && error){
            return <div className="alert alert-danger">
                {error}
            </div>;
        }
    }

    renderTextarea = ({input, label, meta}) => {
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
        this.props.createComment(val);
    }

    render() {
        return (
            <CreateComment />
        )
    }
}

const mapStateToProps = state => {
    return {
        //for later use
    }
}

const validate = val => {
    const errors = {};
    if (!val.comment){
        errors.content = 'ENTER CONTENT'
    }
    return errors;
}

const formWrapped =  reduxForm({
    form: 'createComment',
    validate
})(Thread);

export default connect(mapStateToProps, { loadThreads, createComment })(formWrapped)