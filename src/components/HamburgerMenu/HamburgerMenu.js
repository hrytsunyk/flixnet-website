import React, {useCallback, useEffect, useMemo, useState} from 'react';
import HamburgerMenu from 'react-hamburger-menu'

import css from './HamburgerMenu.module.css';
const MyHamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);



    const handleClick = () => {
        setIsOpen(prevState => prevState)
    }


    const cachedFn = useCallback(handleClick, [isOpen])


    return (
        <HamburgerMenu
            isOpen={isOpen}
            menuClicked={handleClick}
            width={18}
            height={15}
            strokeWidth={1}
            rotate={0}
            color='white'
            borderRadius={0}
            animationDuration={0.5}
            className={css.HamburgerMenu}
        />
    );
};

export {
    MyHamburgerMenu
}