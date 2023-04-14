import React from 'react';

import css from './GenreBadge.module.css';

const GenreBadge = ({genre}) => {
    console.log(genre)

    return (

            <div className={css.GenreBadge}>
                {genre &&
                    <h5>{genre.name}</h5>
                }
            </div>
    );
};

export {
    GenreBadge
}