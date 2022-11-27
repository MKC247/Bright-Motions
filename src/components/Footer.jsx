import React from 'react';
import {Box, Typography} from '@mui/material'

const date = new Date();
const year = date.getFullYear();

const Footer = ()=>{
    return(
        <Box sx={{bgcolor:'background.contrastText'}}>
        <Typography align='center'>
         All rights reserved @{year}
        </Typography>
        </Box>

    )
}

export default Footer;