import React, { useEffect, useContext } from 'react';
import "./App.css";
import Login from './components/login/Login';
import { getTokenFromResponse } from './helpers/spotify';
import SpotifyWebApi from "spotify-web-api-js";
import Player from './components/player/Player';
import { GlobalContext } from './contexts/GlobalContext';

const spotify= new SpotifyWebApi();

const App = () => {

    const {setCurrentUser,setAccessToken,accessToken,isAuthenticated,fetchUserFail,setPlayLists,setDiscoverWeekly} = useContext(GlobalContext);
    useEffect(()=>{
        
        const getDataFromSpotify = async ()=>{
            const hash = getTokenFromResponse();
            window.location.hash = "";
            const _token = hash.access_token;

            if (_token) {
                setAccessToken(_token);
            }
            if (accessToken) {
                try {
                    spotify.setAccessToken(accessToken); // gives access token to spotify web api
                    const user = await spotify.getMe();
                    setCurrentUser(user);

                    const playlists = await spotify.getUserPlaylists();
                    setPlayLists(playlists);

                    const discoverWeekly = await spotify.getPlaylist("37i9dQZEVXcGFf3dtbJgJV");
                    setDiscoverWeekly(discoverWeekly);
                } catch (error) {
                    fetchUserFail();
                }
                
            }
        }
        getDataFromSpotify();

    },[accessToken]);
    return (
        <div>
            {isAuthenticated ? <Player spotify={spotify} /> : <Login />}
        </div>
    );
};

export default App;