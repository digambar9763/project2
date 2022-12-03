import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import AC from '../images/ac.webp'

function Features() {
    return (
        <Box >
            <Navbar />
            <Box pt="50px">
                <div style={{ textAlign: 'center' }}>
                    <Typography variant='h1' fontSize='50px' fontWeight='900' sx={{color:"#6D9886"}}>Features</Typography>
                </div>
                <Stack direction='row' justifyContent='center' gap={40} mt='40px'>
                    <Box>
                        <Typography>High Efficiency Solar Pannels</Typography>
                        <img src={AC} alt='ac solar pannels'></img>
                    </Box>
                    <Box>
                        <ul style={{fontSize:"20px",fontWeight:"600"}}>
                            <li>Our AC Solar Panels generate direct AC electricity which is completely SAFE.</li>
                            <li>Dangerous high voltage DC Electricity is completely eliminated.</li>
                            <li>No DC wires</li>
                            <li>IP67 Rated, Completely SAFE and Water Proof system</li>
                            <li>15 - 25 years product warranty </li>
                            <li>25 years Performance warranty</li>
                        </ul>

                    </Box>

                </Stack>
                <Stack direction='row' justifyContent='center' gap={40} mt='40px'>
                    <Box>
                        <Typography>High Efficiency Solar Pannels</Typography>
                        <img src={AC} alt='ac solar pannels'></img>
                    </Box>
                    <Box>
                        <ul style={{fontSize:"20px",fontWeight:"600"}}>
                            <li>Our AC Solar Panels generate direct AC electricity which is completely SAFE.</li>
                            <li>Dangerous high voltage DC Electricity is completely eliminated.</li>
                            <li>No DC wires</li>
                            <li>IP67 Rated, Completely SAFE and Water Proof system</li>
                            <li>15 - 25 years product warranty </li>
                            <li>25 years Performance warranty</li>

                        </ul>

                    </Box>

                </Stack>
                <Stack direction='row' justifyContent='center' gap={40} mt='40px'>
                    <Box>
                        <Typography>High Efficiency Solar Pannels</Typography>
                        <img src={AC} alt='ac solar pannels'></img>
                    </Box>
                    <Box>
                        <ul style={{fontSize:"20px",fontWeight:"600"}}>
                            <li>Our AC Solar Panels generate direct AC electricity which is completely SAFE.</li>
                            <li>Dangerous high voltage DC Electricity is completely eliminated.</li>
                            <li>No DC wires</li>
                            <li>IP67 Rated, Completely SAFE and Water Proof system</li>
                            <li>15 - 25 years product warranty </li>
                            <li>25 years Performance warranty</li>
                        </ul>

                    </Box>

                </Stack>

                <Stack direction='row' justifyContent='center' gap={40} mt='40px'>
                    <Box>
                        <Typography>High Efficiency Solar Pannels</Typography>
                        <img src={AC} alt='ac solar pannels'></img>
                    </Box>
                    <Box>
                        <ul style={{fontSize:"20px",fontWeight:"600"}}>
                            <li>Our AC Solar Panels generate direct AC electricity which is completely SAFE.</li>
                            <li>Dangerous high voltage DC Electricity is completely eliminated.</li>
                            <li>No DC wires</li>
                            <li>IP67 Rated, Completely SAFE and Water Proof system</li>
                            <li>15 - 25 years product warranty </li>
                            <li>25 years Performance warranty</li>
                        </ul>

                    </Box>

                </Stack>
            </Box>
            <Footer />

        </Box>
    )
}

export default Features
