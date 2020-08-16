import React, { useContext } from 'react';
import "./Body.css";
import Header from '../header/Header';
import { GlobalContext } from '../../contexts/GlobalContext';
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from '../song-row/SongRow';

const Body = ({spotify}) => {
    const {discover_weekly} = useContext(GlobalContext);
    return (
        <div className="body">
            <div className="banner">
                <Header spotify={spotify} />
                <div className="body__info">
                    <img src={discover_weekly?.images[0].url} alt="" />
                    <div className="body__infoText">
                        <strong>PLAYLIST</strong>
                        <h2>Discover Weekly</h2>
                        <p>{discover_weekly?.description}</p>
                    </div>
                </div>
            </div>

            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {discover_weekly?.tracks.items.map((item, index) => (
                    <SongRow key={index} track={item.track} />
                ))}
                <div style={{padding:'50px'}}>  {/* Empty div to give space after list of songs */}
                </div>
            </div>
        </div>
    );
};

export default Body;