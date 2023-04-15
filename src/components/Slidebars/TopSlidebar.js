import React, {useState} from 'react';
import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Button from "@mui/material/Button";
import {GenresList} from "../GenreList/GenresList";

import css from './OpenSlideBar.module.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faArrowCircleDown,
    faArrowDown,
    faArrowDown91,
    faArrowDownAZ,
    faArrowDownWideShort,
    faArrowsDownToLine,
    faArrowTrendDown,
    faArrowUp,
    faCartArrowDown, faClipboardList,
    faListAlt,
    faListOl,
    faListSquares,
    faListUl,
    faTriangleCircleSquare,
    faTriangleExclamation
} from "@fortawesome/free-solid-svg-icons";


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
                    background:'#12121f',
                    position:'sticky',
                    top:'50px',
                }
            }
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

                <GenresList/>


        </Box>
    );

    return (
        <div  className={css.OpenSlideBar}>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <div
                        onClick={toggleDrawer(anchor, true)}>Genres</div>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
            <div className={css.triangle}/>
        </div>
    );
};

export {
    TopSlideBar
}