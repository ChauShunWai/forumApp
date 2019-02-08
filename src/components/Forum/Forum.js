import React from 'react'
import { connect } from 'react-redux'
import { loadThreads, editThread, deleteThread } from '../../actions/index'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Modal from '../modal'


class Forum extends React.Component {
    componentDidMount() {
        this.props.loadThreads();
    }

    renderThreadButton(props) {
        const { isSignedIn } = props
        if (isSignedIn) {
            return (
                <>
                    <Link to="/createpost">
                        <div className="float-right" style={
                            {
                                paddingLeft: '1.1rem',
                                paddingRight: '1.1rem',
                                marginTop: '7px',
                            }
                        }>
                            <i className="fas fa-fw fa-plus"></i>
                            Create Thread
                        </div>
                    </Link>
                    <br />
                </>
            )
        }
    }

    EditOrDeleteButtons(element) {
        if (this.props.userId === element.userId) {
            return (
                <>
                    <div style={{ marginTop: '5px' }}>
                        <Link to={`editThread/${element.id}`}
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

    renderThreads = () => {
        //console.log(threads)
        return this.props.threads.map(element => {
            return (
                <div className="d-inline-flex p-2" style={{ paddingTop: '20px'}} key={`${element.id}`}>
                    <Card body>
                        <Link style={{textDecoration:'none', color: 'inherit'}} to={`/thread/${element.id}`}>
                            <Card.Title>{element.title}</Card.Title>
                            <Card.Subtitle>{element.userName}</Card.Subtitle>
                        </Link>
                        {this.EditOrDeleteButtons(element)}
                    </Card>
                </div>
            )
        })
    }

    renderRefresh = () => {
        return (
            <button
                onClick={() => {
                    this.props.loadThreads();
                }}
                style={
                    {
                        paddingLeft: '1.1rem',
                        paddingRight: '1.1rem',
                        marginTop: '7px',
                    }
                }
            >
                <i className="fas fa-sync-alt"></i>
            </button>
        )
    }

    render() {
        return (
            <div>
                {this.renderRefresh()}
                {(!this.props.isSignedIn)?<br/>:null}
                {this.renderThreadButton(this.props)}
                {this.renderThreads()}
                <br />
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        threads: Object.values(state.threads),
        isSignedIn: state.auth.isSignedIn,
        userId: state.auth.userId
    };
}

const mapDispatchToProps = { loadThreads, editThread, deleteThread }

export default connect(mapStateToProps, mapDispatchToProps)(Forum);