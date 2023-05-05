import React from 'react';
import 'mui-player/dist/mui-player.min.css'
import {urls} from "../../configs";
import css from './Video.module.css';

const VideoListCard = ({video}) => {
    const {name, key} = video;


    return (
        <div className={css.VideoListCardFather}>

            <div className={css.hrLine}></div>
            <div className={css.iframeFather}>
                < iframe
                    title={`${name}`}
                    src={`${urls.base.youTube}${key}`}
                    allow="fullscreen"
                />
            </div>
        </div>
    );
};

export {
    VideoListCard
}