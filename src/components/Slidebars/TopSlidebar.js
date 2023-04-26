import React, {useState} from 'react';
import {Box, Drawer} from "@mui/material";
import {GenresList} from "../GenreList/GenresList";

import css from './OpenSlideBar.module.css';

const TopSlideBar = () => {
    const [state, setState] = useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <Box
            sx={
                {
                    width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                    background: '#12121f',
                    position: 'sticky',
                    top: '50px',
                }
            }
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <GenresList/>
        </Box>
    );

    return (
        <div className={css.OpenSlideBar}>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div onClick={toggleDrawer(anchor, true)}>
                        Genres
                        <div className={css.triangle}/>
                    </div>
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
    TopSlideBar
}