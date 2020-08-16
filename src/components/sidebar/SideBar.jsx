import React, { useContext } from 'react';
import "./SideBar.css";
import SpotifyLogo from "../../assets/spotify-logo.jpg";
import SidebarOption from '../sidebar-option/SidebarOption';
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { GlobalContext } from '../../contexts/GlobalContext';

const SideBar = () => {
    const {playlists}= useContext(GlobalContext);
    return (
        <div className="sidebar">
            <img className="sidebar__logo" src={SpotifyLogo} alt="logo" />
            <SidebarOption option="Home" Icon={HomeIcon} />
            <SidebarOption option="Search" Icon={SearchIcon} />
            <SidebarOption option="Library" Icon={LibraryMusicIcon} /> {/* since Icon prop is a Component, its in caps */}
            <br />
            <strong className="sidebar__title">PLAYLISTS</strong>
            <hr />
            {
                playlists?.items?.map((playlist,index)=>(
                    <SidebarOption key={index+4} option={playlist.name} />
                ))
            }
        </div>
    );
};

export default SideBar;