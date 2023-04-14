import React from 'react';

import css from './GenreBadge.module.css';

const GenreBadge = ({genre}) => {
    console.log(genre)

    return (
        <div>
            <div className={css.GenreBadge}>
                {genre &&
                    genre.name
                }
            </div>
        </div>
    );
};

export {
    GenreBadge
}