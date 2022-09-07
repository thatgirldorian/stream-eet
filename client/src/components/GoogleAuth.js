import React from 'react';
import '../App.css'

class GoogleAuth extends React.Component {
    //wire up the Google API library
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: `${process.env.REACT_APP_CLIENT_ID}`,
                scope: 'email',
                plugin_name: 'stream-eet'
            })
        })
    }

    render() {
        return <div>
            <button className='ui basic button'>Login with <i className="google icon"></i></button>
            </div>
    }
}

export default GoogleAuth;