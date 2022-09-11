import React from 'react';
import '../App.css'
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'


class GoogleAuth extends React.Component {   
    //wire up the Google API library
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: `${process.env.REACT_APP_CLIENT_ID}`,
                scope: 'email',
                plugin_name: 'stream-eet'
            }).then(() => {
                //get a reference to the auth object
                this.auth = window.gapi.auth2.getAuthInstance()

                //check if the user if signed in when the auth state is updated
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    //check if a user is signed by calling the action creator in and passing the user id
    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId())
        } else {
            this.props.signOut()
        }
    }

    //create helper functions for log in and log out
    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }


    //add a helper method to show sign in
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return <div className="ui active mini inline loader"></div>
        } else if (this.props.isSignedIn) {
            return (
                <button onClick={this.onSignOutClick} className="ui red google button">Sign out
                    <i className="google icon"></i>
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignInClick} className="ui blue google button">Login with 
                    <i className="google icon"></i>
                </button>
            ) 
            }
    }


    render() {
        return <div>
            {this.renderAuthButton()}
            </div>
    }
}


const mapStateToProps = state => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect( mapStateToProps, { signIn, signOut})(GoogleAuth);