import React from 'react';

import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
    return (
        <div className={css.NotFoundPage}>
            <div className={css.NotFoundPageBox}>
                <h1>PAGE NOT FOUND</h1>
            </div>
        </div>
    );
};

export {
    NotFoundPage
}