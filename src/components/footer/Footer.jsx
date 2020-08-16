import React from 'react';
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import PauseCircleOutlineIcon from "@material-ui/icons/PauseCircleOutline";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import { Grid, Slider } from "@material-ui/core";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__left">
                <img className="footer__albumLogo" src="https://i.scdn.co/image/ab67616d000048515e90ff76fd49a23f7333de76" alt=""/>
                <div className="footer__songInfo">
                    <h4>Mera Maan</h4>
                    <p>A.R Rahman</p>
                </div>
            </div>
            <div className="footer__center">
                <ShuffleIcon className="footer__green" />
                <SkipPreviousIcon className="footer__icon" />
                <PlayCircleOutlineIcon fontSize="large" className="footer__icon"/>
                <SkipNextIcon className="footer__icon" />
                <RepeatIcon className="footer__green" />
            </div>
            <div className="footer__right">
                <Grid container spacing={2}>  {/* Makes grid with space between columns as spacing x 8px  */}
                    <Grid item>
                        <PlaylistPlayIcon className="footer__icon"/>
                    </Grid>
                    <Grid item>
                        <VolumeDownIcon className="footer__icon vol__icon"/>
                    </Grid>
                    <Grid item xs>  { /* Breakpoint is xs i.e occupies 12 cols till xs */}
                        <Slider aria-labelledby="continuous-slider"/>  {/* Volume slider */}
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Footer;