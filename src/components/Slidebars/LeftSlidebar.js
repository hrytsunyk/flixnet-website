import React, {useCallback, useState} from 'react';
import {Avatar, Box, Drawer} from "@mui/material";
import {GenresList} from "../GenreList/GenresList";

import css from './OpenSlideBar.module.css';
import {MyHamburgerMenu} from "../HamburgerMenu/HamburgerMenu";
import {Navigation} from "../Navigation/Navigation";
import {AvatarImage} from "../Avatar/Avatar";

const LeftSlidebar = () => {
    const [state, setState] = useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        // if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        //     return;
        // }

        setState({...state, [anchor]: open});
    };



    const list = (anchor) => (
        <Box
            sx={
                {
                    height:'100%',
                    width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                    display: 'flex',
                    flexDirection:"column",
                    justifyContent: 'center',
                    alignItems:'center',
                    background: '#12121f',
                    position: 'sticky',
                    top: '50px',
                }
            }
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Navigation/>
        </Box>
    );

    return (
        <div className={css.OpenSlideBar}>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div onClick={toggleDrawer(anchor, true)}><MyHamburgerMenu/></div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export {
    LeftSlidebar
}