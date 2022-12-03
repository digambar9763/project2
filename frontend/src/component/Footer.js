import { Button, TextField, Typography,Box,Stack } from '@mui/material'
import React from 'react'

function Footer() {
  return (
   <Box mt={10}  pt='50px' sx={{backgroundColor:"#CFFF8D"}}>
    <Stack  direction='row' justifyContent='center' gap='50px'>
        <Box>
            <Typography fontWeight={800}>Main Menu</Typography>
            <ul style={{listStyle:'none'}}>
                <li>Home</li>
                <li>Product & Services</li>
                <li>AC Cares</li>
                <li>Login</li>
                <li>Register</li>
                <li>Contacts</li>
            </ul>
        </Box>
        <Box sx={{display:"flex",flexDirection:"column"}}>
        <Typography fontWeight={800}>Subscribe</Typography>
        <Typography> Leave Your Email Address Here</Typography>
        <TextField type='email' placeholder='email address'/>
        <div>
        <Button>Subscribe</Button>
        </div>
        </Box>
        <Box>
            <Typography fontWeight={800}>About Us</Typography>
            <Typography>
            Loom Solar is a start-up, a manufacturer of solar panels and Lithium batteries based out of Faridabad, <br></br>Haryana. It is an ISO 9001-2015 certified company and recognised startup by Govt. of India. <br></br>It is present in 500 districts across India having 3500 resellers, 100 employees, 2 offices and 1 Manufacturing unit.
            </Typography>
        </Box>
    </Stack>
   </Box>
  )
}

export default Footer
