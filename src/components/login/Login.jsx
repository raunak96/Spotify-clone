import React from 'react';
import "./Login.css";
import SpotifyLogo from "../../assets/spotify-logo.jpg";
import { loginURL } from '../../helpers/spotify';

const Login = () => {
    return (
        <div>
            <div className="login">
                <img src={SpotifyLogo} alt="spotify-logo"/>
                <a href={loginURL}>LOGIN TO SPOTIFY</a>
            </div>
        </div>
    );
};

export default Login;