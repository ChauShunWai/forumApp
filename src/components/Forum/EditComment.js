import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { loadComments, editComment } from '../../actions/index'
import CommentForm from './CommentForm'

class EditComment extends React.Component {
    componentDidMount() {
        this.props.loadComments();
    }

    onSubmit = (val) => {
        this.props.editComment(this.props.comment.id, val);
    }

    render() {
        if (!this.props.isSignedIn) {
            return (
                <div>
                    {`You have not signed in!
                    (might need to load for a second)`}
                </div>
            )
        }
        if (!this.props.comment) {
            return <div>Comment does not exist (or loading for few seconds)</div>
        }
        if (this.props.userId !== this.props.comment.userId) {
            return <div>You are not the creator</div>
        }
        return (
            <div>
                <h3 className="d-flex justify-content-center">Edit a Comment</h3>
                <CommentForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.comment, 'Comment')}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        comment: state.comments[ownProps.match.params.id]
    }
}

export default connect(
    mapStateToProps,
    { loadComments, editComment }
)(EditComment);