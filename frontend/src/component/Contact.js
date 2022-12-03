import React from 'react'
import { Stack, Box, TextField, TextareaAutosize, Typography, Card } from '@mui/material'

function Contact() {
  return (
    <Box pt='50px' id="contact">
      <div style={{ textAlign: 'center' }}>
        <Typography variant='h1' fontSize='50px' fontWeight='900'>Contacts</Typography>
      </div>
      <Stack mt='90px' justifyContent='center' direction='row' gap={20} >
          
            <Card sx={{padding:'20px'}}>
              <h1>Our Office Location</h1>
              <Typography>
                567, Venkatesh Apartment, Vastunagar Society, Market Yard, Pune : 411037
                Maharashtra
              </Typography>
              <h1>Phone-Number</h1>
              <Typography>
                123456789
              </Typography>
              <h1>Email-Address</h1>
              <Typography>
                info@shunyasolar.commercial
              </Typography>
            </Card>
          
     
        <Box>
          <form style={{ display: "flex", flexDirection: 'column' }}>
            <TextField sx={{marginTop:"5px"}}  placeholder='First Name'></TextField>
            <TextField sx={{marginTop:"5px"}}  placeholder='Last Name'></TextField>
            <TextField  sx={{marginTop:"5px"}}  type='email' placeholder='Email'></TextField>
            <TextField sx={{marginTop:"5px"}}  marginTop="5px" type='number' placeholder='phone number'></TextField>
            <TextareaAutosize
              
              aria-label="Give Your Comment"
              placeholder="Comment"
              style={{ width: 500, height: 100,marginTop:"5px" }}></TextareaAutosize>
          </form>
        </Box>

      </Stack>
    </Box>
  )
}

export default Contact
