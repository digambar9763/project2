import { Box, Card, CardContent, Stack, Typography } from '@mui/material'
import React from 'react'
import Footer from '../Footer'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GroupsIcon from '@mui/icons-material/Groups';
import SolarPowerIcon from '@mui/icons-material/SolarPower';
import Carousel from 'react-elastic-carousel'
import ap1 from '../images/ap1.jpg'
import ap2 from '../images/ap2.jpg'
import ap3 from '../images/ap3.jpg'
import ap4 from '../images/ap4.jpg'
import ap5 from '../images/ap5.jpg'
import ap6 from '../images/ap6.jpg'
import ap7 from '../images/ap7.jpg'
// import ap8 from '../images/ap1.jpg'
// import ap9 from '../images/ap1.jpg'
// import ap10 from '../images/ap1.jpg'
// import ap11 from '../images/ap1.jpg'
// import ap12 from '../images/ap1.jpg'
// import ap13 from '../images/ap1.jpg'
// import ap14 from '../images/ap1.jpg'
// import ap15 from '../images/ap1.jpg'
// import ap16 from '../images/ap1.jpg'
// import ap17 from '../images/ap1.jpg'
import "./AboutCompony.css"
function AboutCompony() {
    return (
        <Box>
            
            <Stack>
                <div className="about">
                    <h1 style={{ fontWeight: "800",fontSize:"50px" }}>AP ELECTRICALS</h1>
                </div>
                <div style={{ display: "flex", justifyContent: "center", alignItems: 'center' }}>
                    <div style={{ margin: "20px", textAlign: "center" }}>
                        <p style={{ fontSize: "20px" }}>
                            Founded in 1997, Trina Solar Co., Ltd. (stock symbol: Trina Solar; stock code: 688599) is mainly engaged in the research and development, production and sales of PV modules; power stations and system products; PV power generation, operation and maintenance services; development and sales of intelligent microgrids and multi-energy systems, as well as the operation of energy cloud platforms, etc., committing to lead the way in smart solar energy solutions for a net-zero future. Through constant innovation, Trina Solar continues to push the PV industry forward by creating greater grid parity of PV power and popularizing renewable energy. So far, Trina Solar’s SKL has set or broken 25 world records in terms of PV cell conversion efficiency and module output power.
                            By the end of the April 11th, 2022, its cumulative shipments of PV modules had exceeded 100GW, which is close to the installed capacity of 4.4 Three Gorges Dam power stations and equivalent to planting 7.4 billion trees worldwide.
                            In addition, Trina's downstream business includes solar PV project development, financing, design, construction, operations and management, and one-stop system integration solutions for customers. Trina Solar has connected over 5.5GW of solar power plants to the grid worldwide.
                        </p>
                    </div>
                </div>
                <Stack direction='row' gap={10} justifyContent='center'>
                    <Card sx={{width:"200px"}}>
                        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <LocalShippingIcon fontSize='large' />
                            <Typography sx={{textAlign:"center"}}>Cummulative Shipments</Typography>
                            <Typography variant='h4' fontWeight='600'>100+</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width:"200px"}}>
                        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <GroupsIcon fontSize='large' />
                            <Typography>Our Employee</Typography>
                            <Typography variant='h4' fontWeight='600'>20+</Typography>
                        </CardContent>
                    </Card>
                    <Card sx={{width:"200px"}}>
                        <CardContent sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                            <SolarPowerIcon fontSize='large' />
                            <Typography>Our Projects</Typography>
                            <Typography variant='h4' fontWeight='600'>200+</Typography>
                        </CardContent>
                    </Card>
                </Stack>
            </Stack>
            <div style={{margin:"60px 30px 10px 30px"}}>
                <Carousel itemsToShow={1}>
                    <div style={{height:"500px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                         <img  style={{ objectFit:"cover"}} src={ap1} alt='ac'></img>
                    </div>
                    <div style={{height:"500px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                         <img  style={{ objectFit:"cover"}} src={ap2} alt='ac'></img>
                    </div>
                    <div style={{height:"500px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                         <img  style={{ objectFit:"cover"}} src={ap3} alt='ac'></img>
                    </div>
                    <div style={{height:"500px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                         <img  style={{ objectFit:"cover"}} src={ap4} alt='ac'></img>
                    </div>
                    <div style={{height:"500px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                         <img  style={{ objectFit:"cover"}} src={ap5} alt='ac'></img>
                    </div>
                    <div style={{height:"500px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                         <img  style={{ objectFit:"cover"}} src={ap6} alt='ac'></img>
                    </div>
                    <div style={{height:"500px",display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                         <img  style={{ objectFit:"cover"}} src={ap7} alt='ac'></img>
                    </div>
                </Carousel>
            </div>
            <Footer />
        </Box>
    )
}

export default AboutCompony
