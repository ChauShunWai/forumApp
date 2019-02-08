import React from 'react'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'
import {Nav} from 'react-bootstrap'

class GoogleAuth extends React.Component {
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '88520721261-32agcpmf7pf3oocj25b6qujkf4j5vnv4.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            const currentUser = this.auth.currentUser.get();
            this.props.signIn(currentUser.El, currentUser.getBasicProfile().ig)
        } else if (isSignedIn === null) {
            return
        } else {
            this.props.signOut()
        }
    }

    renderAuthButton = () => {
        if (this.props.isSignedIn === null) {
            return (
                <div>
                    <i className="fab fa-fw fa-google"> </i>
                    Sign In
                </div>
            )
        } else if (!this.props.isSignedIn) {
            return (
                <div onClick={this.onAuthClick}>
                    <i className="fab fa-fw fa-google"> </i>
                    Sign In
                </div>
            )
        } else {
            return (
                <div onClick={this.onAuthClick}>
                    <i className="fab fa-fw fa-google"> </i>
                    Sign Out
                </div>
            )
        }
    }

    renderUserName = () => {
        if (this.props.isSignedIn){
            return (
                    <div className="nav-link">
                    <i className="fas fa-fw fa-user"></i>
                        {`Hi, ${this.props.userName}`}
                    </div>
            )
        }
    }

    onAuthClick = () => {
        if (this.props.isSignedIn) {
            this.auth.disconnect();
        } else {
            this.auth.signIn();
        }
    }

    

    render() {
        return (
            <>
                <Nav.Item className="nav-link">
                    {this.renderAuthButton()}
                </Nav.Item>
                {this.renderUserName()}
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        userName: state.auth.userName
    }
}

const mapDispatchToProps = { signIn, signOut };

export default connect(mapStateToProps, mapDispatchToProps)(GoogleAuth);