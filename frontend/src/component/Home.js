import React from 'react'
import { Box,Typography} from "@mui/material"
import solar from "./images/solar.webp"


function Home() {
    return (
        <Box id='home' marginTop='10px'>
            <img style={{width:'100%'}} src={solar} alt='solarpanel'></img>
            <Box position='absolute' top='175px' left='50px'>
                <Typography mt={2} color='white' fontWeight='medium' variant="h2">Be Future Ready With</Typography>
                <Typography mt={2} color='#FF6D28' fontWeight='900' variant="h2">SIMPLE | SMART | SAFE</Typography>
                <Typography mt={2} color='white' fontWeight='medium'  variant="h2">Ac Solar Pannels</Typography>
            </Box>
        </Box>
    )
}

export default Home

