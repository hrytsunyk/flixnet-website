import React, {useState} from 'react';
import {Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Button from "@mui/material/Button";
import {GenresList} from "../GenreList/GenresList";


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
            // role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >

                <GenresList/>


        </Box>
    );

    return (
        <div>
            {['top'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button
                        sx={{
                          'margin':'10px',
                            'display':'flex',
                            'justify-content':'center',
                            'align-items': 'center',
                            'color':'grey',
                        }}
                        onClick={toggleDrawer(anchor, true)}>Genres</Button>
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