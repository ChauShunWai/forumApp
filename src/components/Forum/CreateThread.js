import React from 'react'
import { connect } from 'react-redux'
import { createThread } from '../../actions/index'
import ThreadForm from './ThreadForm'

class CreateThread extends React.Component {
    onSubmit = (val) => {
        this.props.createThread(val);
    }

    signInCheck = () => {
        if (this.props.isSignedIn) {
            return (
                <ThreadForm onSubmit={this.onSubmit} />
            )
        } else {
            return <div> Log In first</div>
        }
    }

    render() {
        return (  
            <div>
                <h3 className="d-flex justify-content-center">Create a Thread</h3>
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
    { createThread }
)(CreateThread)