import React from 'react';
import 'mui-player/dist/mui-player.min.css'
import MuiPlayer from 'mui-player'
import {urls} from "../../configs";

const VideoListCard = ({video}) => {
    const {name,key, type} = video;


    return (
        <div>
         <iframe
             width="800"
             height="500"
             src={`${urls.base.youTube}${key}`}
             style={{borderStyle: "none"}}
             allow="fullscreen"
         >

         </iframe>
        </div>
    );
};

export {
    VideoListCard
}