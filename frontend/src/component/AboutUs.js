import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

function AboutUs() {
    return (
        <Box id="about" pt='50px' textAlign='center'>
            <div style={{textAlign:'center'}}>
            <Typography variant='h1' fontSize='50px' fontWeight='900'>About Us</Typography>
            </div>
        
            <Typography mt="20px">
            Ap Electricals is a start-up, a manufacturer of solar panels and Lithium batteries based out of Faridabad, <br></br>Haryana. It is an ISO 9001 - 2015 certified company and recognized startup by Govt. of India. <br></br>It is present in 500 districts across India having 3500 resellers, 100 employees, 2 offices and 1 Manufacturing unit.
            </Typography>
            <Link to='/about'><Button mt="10px">Discover Our Brand</Button></Link>

        </Box>
    )
}

export default AboutUs
