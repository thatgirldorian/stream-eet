import React from 'react';
import '../App.css'

class GoogleAuth extends React.Component {
    //add some state to show whether a user is signed in
    state = { isSignedIn: null }

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
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
    }

    //create helper functions for log in and log out
    onSignIn = () => {
        this.auth.signIn()
    }

    onSignOut = () => {
        this.auth.signOut()
    }


    //add a helper method to show sign in
    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div className="ui active mini inline loader"></div>
        } else if (this.state.isSignedIn) {
            return (
                <button onClick={this.onSignOut} className="ui red google button">Sign out
                    <i className="google icon"></i>
                </button>
            )
        } else {
            return (
                <button onClick={this.onSignIn} className="ui blue google button">Login with 
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


export default GoogleAuth;