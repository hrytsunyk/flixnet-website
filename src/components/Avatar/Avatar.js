import * as React from 'react';
import {useNavigate, useParams, useSearchParams} from "react-router-dom";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {urls} from "../../configs";
import {Avatar, Stack} from "@mui/material";

const AvatarImage = () => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const [query] = useSearchParams();
    const login = query.get('auth');
    console.log(login)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = async () => {
        setAnchorEl(null);
      await  navigate('/login/auth')
    };

    return (
        <div>
            {<Stack direction="row" spacing={2}>
                <Avatar onClick={handleClick} alt="Remy Sharp" src={`${urls.base.getAvatar}`}/>
            </Stack>}

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