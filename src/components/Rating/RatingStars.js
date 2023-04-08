import React from 'react';

import { Rating } from '@mui/material';

const RatingStars = ({rating}) => {

    return (
        <div>
            <Rating name="read-only" value={rating ? rating/2 : 3} readOnly />
        </div>
    );
};

export {
    RatingStars
}