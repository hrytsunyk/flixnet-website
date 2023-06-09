import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {videoActions} from "../../redux/slices/videoSlice";
import {useParams} from "react-router-dom";
import {VideoListCard} from "../VideoListCard/VideoListCard";

const VideoList = () => {
    const dispatch = useDispatch();
    const {videoList} = useSelector(state => state.video);
    const {movieId} = useParams();

    // const movieIdQuery= query.get('movieId');

    useEffect(() => {
        dispatch(videoActions.getVideoList({movieId}))
    }, [dispatch, movieId])

    return (
        <div>
            {videoList && videoList.map((video, index) => (video.name.includes('Official Trailer') ? <VideoListCard key={index} video={video}/> : null))}
        </div>
    );
};

export {
    VideoList
}