import { AppBar, IconButton, MenuItem, Toolbar, Typography } from "@material-ui/core";
import React from "react";
const Navbar=()=>{

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit">
                    <MenuItem />
                </IconButton>
                <Typography>Live Score</Typography>
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;