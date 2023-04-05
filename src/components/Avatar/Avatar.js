// import * as React from 'react';
// import Avatar from '@mui/material/Avatar';
// import Stack from '@mui/material/Stack';
// import {urls} from "../../config/urls";
// import MenuList from "@mui/material/MenuList";
//
// const AvatarImage = () => {
//     return (
//         <Stack direction="row" spacing={2}>
//             <Avatar alt="Remy Sharp" src={`${urls.base.avatarImg}`} />
//         </Stack>
//     );
// };
//
// export {
//     AvatarImage
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {urls} from "../../config/urls";
import {Avatar, Stack} from "@mui/material";

import css  from './AvatarMenuFather.css'
const AvatarImage = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Stack direction="row" spacing={2}>
                <Avatar  onClick={handleClick}  alt="Remy Sharp" src={`${urls.base.avatarImg}`}/>
            </Stack>

            <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
                marginThreshold={50}

            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    );
}

export {
    AvatarImage
}