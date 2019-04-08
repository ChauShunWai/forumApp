import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Modal from '../modal'
import { connect } from 'react-redux'
import CreateComment from './CreateComment'
import history from '../../history'
import { loadThread, loadThreads, loadComments, createComment, deleteThread, deleteComment } from '../../actions/index'

class Thread extends React.Component {
    componentDidMount() {
        this.props.loadComments();
        this.props.loadThread(this.props.match.params.id)
    }

    onSubmit = (val) => {
        this.props.createComment(val, this.props.match.params.id)
            .then(
                () => this.props.loadComments()
            )
    }

    renderThread = () => {
        if (!this.props.thread || !this.props.isSignedIn) {
            return <h1>loading</h1>
        }
        return (
            <Card>
                <Card.Body>
                    <Card.Title>
                        {this.props.thread.userName}
                    </Card.Title>
                    <Card.Subtitle>
                        {this.props.thread.title}
                    </Card.Subtitle>
                    <Card.Text>
                        {this.props.thread.content}
                    </Card.Text>
                </Card.Body>
                {this.EditOrDeleteThreads(this.props.thread)}
            </Card>
        )
    }

    renderComments = () => {
        if (!this.props.comments || !this.props.isSignedIn) {
            return <h1>loading/ you are not signed in</h1>
        }
        return this.props.comments.map(comment => {
            return (
                <Card key={comment.id}>
                    <Card.Body>
                        <Card.Title>
                            {comment.userName}
                        </Card.Title>
                        <Card.Text>
                            {comment.Comment}
                        </Card.Text>
                    </Card.Body>
                    {this.EditOrDeleteComments(comment)}
                </Card>
            )
        }
        )
    }

    EditOrDeleteComments(element) {
        if (this.props.userId === element.userId) {
            return (
                <>
                    <div style={{ marginTop: '5px' }}>
                        <Link to={`/editComment/${element.id}`}
                            className="btn btn-primary"
                            style={{ marginRight: '15px' }}
                        >
                            EDIT
                        </Link>
                        <Modal
                            title='DELETE COMMENT'
                            message="you sure you want to delete?"
                            button="DELETE"
                            onClick={() => this.props.deleteComment(element.id, this.props.match.params.id)}
                        />
                    </div>
                </>
            )
        }
    }

    renderRefresh = () => {
        return (
            <button
                onClick={() => {
                    this.props.loadThreads().then(
                        (() => {
                            if (!this.props.thread) {
                                return history.push('/forum')
                            }
                        })
                    )
                    this.props.loadComments();
                }}
                style={
                    {
                        paddingLeft: '1.1rem',
                        paddingRight: '1.1rem',
                        marginLeft: '45%',
                    }
                }
            >
                <i className="fas fa-sync-alt"></i>
            </button>
        )
    }

    EditOrDeleteThreads(element) {
        if (this.props.userId === element.userId) {
            return (
                <>
                    <div style={{ marginTop: '5px' }}>
                        <Link to={`/editThread/${element.id}`}
                            className="btn btn-primary"
                            style={{ marginRight: '15px' }}
                        >
                            EDIT
                        </Link>
                        <Modal
                            title='DELETE THREAD'
                            message="you sure you want to delete?"
                            button="DELETE"
                            onClick={() => this.props.deleteThread(element.id)}
                        />
                    </div>
                </>
            )
        }
    }

    render() {
        return (
            <>
                {this.renderThread()}
                {this.renderComments()}
                {this.renderRefresh()}
                <CreateComment onSubmit={this.onSubmit} />
            </>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const { id } = ownProps.match.params;
    const comments = Object.values(state.comments).filter(element => {
        return element.threadId === id;
    })
    return {
        thread: state.threads[id],
        comments,
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    }
}

export default connect(
    mapStateToProps, {
        loadThread,
        loadThreads,
        loadComments,
        createComment,
        deleteComment,
        deleteThread
    })(Thread)