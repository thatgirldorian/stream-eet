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

                //check if the user if signed in
                this.setState({ isSignedIn: this.auth.isSignedIn.get() })
            })
        })
    }

    //add a helper method to show sign in
    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I'm not sure the user is signed in</div>
        } else if (this.state.isSignedIn) {
            return <div>User logged in</div>
        } else {
            return <div>The user is not signed in</div>
            }
    }


    render() {
        return <div>
            {this.renderAuthButton()}
            </div>
    }
}

{/* <button className='ui basic button'>Login with <i className="google icon"></i></button> */}

export default GoogleAuth;