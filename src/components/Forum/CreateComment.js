import React from 'react'
import { connect } from 'react-redux'
import { createComment } from '../../actions/index'
import CommentForm from './CommentForm'

class CreateComment extends React.Component {
    signInCheck = () => {
        if (this.props.isSignedIn) {
            return (
                <CommentForm onSubmit={this.props.onSubmit} />
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

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(
    mapStateToProps, 
    { createComment }
)(CreateComment)