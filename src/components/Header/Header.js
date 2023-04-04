import React from 'react';

import css from './Header.module.css';

const Header = () => {
    return (
        <div className={css.HeaderFather}>
            <div>
                <h3>FLIXNET</h3>
            </div>

            <div className={css.NavBar}>
                <div>Movies</div>
                <div>TV shows</div>
                <div>Animations</div>
                <div>Plans</div>
            </div>

            <div>

            </div>
        </div>
    );
};

export {
    Header
}