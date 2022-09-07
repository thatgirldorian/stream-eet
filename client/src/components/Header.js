import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom'
import '../App.css'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <BrowserRouter>
            <div className="ui secondary pointing menu">
                <Link to='/' className="item">stream-eet</Link>
                <div className="right menu">
                    <Link to='/streams/list' className="item">All Streams</Link>
                    <GoogleAuth />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default Header