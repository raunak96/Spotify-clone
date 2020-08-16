import React from 'react';
import "./Player.css";
import SideBar from '../sidebar/SideBar';
import Footer from '../footer/Footer';
import Body from '../body/Body';

const Player = ({spotify}) => {
    return (
        <div className="player">
            <div className="player__body">
                <SideBar />
                <Body spotify={spotify} />
            </div>
            <Footer />
        </div>
    );
};

export default Player;