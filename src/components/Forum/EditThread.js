import _ from 'lodash'
import React from 'react'
import { connect } from 'react-redux'
import { loadThreads, editThread } from '../../actions/index'
import ThreadForm from './ThreadForm'

class EditThread extends React.Component {
    componentDidMount() {
        this.props.loadThreads();
    }

    onSubmit = (val) => {
        this.props.editThread(this.props.thread.id, val);
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
        if (!this.props.thread) {
            return <div>Stream does not exist (or loading for few seconds)</div>
        }
        if (this.props.userId !== this.props.thread.userId) {
            return <div>You are not the creator</div>
        }
        return (
            <div>
                <h3 className="d-flex justify-content-center">Edit a Thread</h3>
                <ThreadForm
                    onSubmit={this.onSubmit}
                    initialValues={_.pick(this.props.thread, 'title', 'content')}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId,
        thread: state.threads[ownProps.match.params.id]
    }
}

export default connect(
    mapStateToProps,
    { loadThreads, editThread }
)(EditThread);