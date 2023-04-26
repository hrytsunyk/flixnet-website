import React from 'react';
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'
import {urls} from "../../configs";
// import css from "../MovieInfo/MovieInfo.module.css";
import css from './Video.module.css';

const VideoListCard = ({video}) => {
    const {name, key, type} = video;


    return (
        <div className={css.VideoListCardFather}>

            <div className={css.hrLine}></div>
            <iframe
                src={`${urls.base.youTube}${key}`}
                allow="fullscreen"
            />

        </div>
    );
};

export {
    VideoListCard
}