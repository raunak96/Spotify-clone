import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';
import ActionTypes from './actionTypes';

const INITIAL_STATE = {
    user: null,
    playists: [],
    playing: false,
    item: null,
    discover_weekly: null,
    accessToken: localStorage.getItem("token"),
    isAuthenticated: null,
    setAccessToken: () => {},
    setCurrentUser: () => {},
    fetchUserFail: () => {},
    setPlayLists: () => {},
    setDiscoverWeekly: () => {}
};
export const GlobalContext= createContext(INITIAL_STATE);


const GlobalProvider = ({children}) => {

    const [state,dispatch] = useReducer(AppReducer,INITIAL_STATE);
    const {user,playlists,playing,item,accessToken,isAuthenticated,discover_weekly} = state;
    const setAccessToken = (token) => {
        console.log("Firing set Access Token");
        dispatch({
            type: ActionTypes.SET_ACCESS_TOKEN,
            payload: token
        });
    }
    const setCurrentUser = (user) => {
        console.log("Firing set current user");
        dispatch({
            type: ActionTypes.SET_CURRENT_USER,
            payload: user
        });
    }
    const setPlayLists = (playlists) => {
        console.log("Firing set PlayLists");
        dispatch({
            type: ActionTypes.SET_PLAYLISTS,
            payload: playlists
        })
    };
    const setDiscoverWeekly = (playlist) => {
        console.log("Getting discover weekly");
        dispatch( {type: ActionTypes.GET_DISCOVER_WEEKLY, payload: playlist} );
    }
    const fetchUserFail =()=> {console.log("Firing fetch user fail");dispatch({type: ActionTypes.TOKEN_EXPIRED})};

    return (
        <GlobalContext.Provider value={{user,playlists,playing,item,accessToken,discover_weekly,setAccessToken,setCurrentUser,isAuthenticated,fetchUserFail,        setPlayLists,setDiscoverWeekly}}>
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;