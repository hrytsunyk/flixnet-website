import React, {useState} from 'react';
import {Box, Drawer} from "@mui/material";
import {GenresList} from "../GenreList/GenresList";

import css from './OpenSlideBar.module.css';

const TopGenreListSlidebar = () => {
    const [state, setState] = useState({
        top: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        setState({...state, [anchor]: open});
    };

    const list = (anchor) => (
        <Box
            sx={
                {
                    height:'100%',
                    width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems:'center',
                    flexWrap: 'wrap',
                    background: '#12121f',
                    // position: 'sticky',
                    // top: '50px',
                }
            }
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

            <GenresList/>
        </Box>
    );

    return (
        <div >
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div className={css.OpenSlideBar} onClick={toggleDrawer(anchor, true)}>
                        Genres
                        <div className={css.triangle}/>
                    </div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false )}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
};

export {
    TopGenreListSlidebar
}