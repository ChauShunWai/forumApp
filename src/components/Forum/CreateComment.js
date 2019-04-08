import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../actions/index'
import CommentForm from './CommentForm'

class CreateComment extends React.Component {
    signInCheck = () => {
        if (this.props.isSignedIn) {
            return (
                <CommentForm formId="create_comment" onSubmit={this.props.onSubmit} initialValues={{'Comment': null}} />
            )
        } else {
            return <div> Log In first</div>
        }
    }

    render() {
        return (  
            <div>
                <h3 className="d-flex justify-content-center">Create a Comment</h3>
                {this.signInCheck()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        form: ownProps.formId,
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(
    mapStateToProps, 
    { createComment }
)(CreateComment)