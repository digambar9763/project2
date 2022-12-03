import React from 'react'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { Box, Typography } from '@mui/material'
import stringInverter from '../images/stringInverter.webp'
import  acSolarPannels from '../images/acSolarPannels.webp'
import  solarPower from '../images/solarPower.webp'

function Commercial() {
  return (
    <Box>
      <Navbar />
      <Box sx={{marginTop:"25px"}}>
        <div style={{textAlign:"center"}}><h1>Ac solar Pannels are made for commercials </h1></div>
        <div style={{display:'flex',justifyContent:'space-Around'}}>
        <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
          <img style={{width:"400px",height:"400px"}} src={stringInverter} alt='string inverter'></img>
          <div>
            <Typography  sx={{textAlign:"center",fontSize:"25px",marginTop:"5px"}} >Single Point of failure</Typography>
            <ul style={{listStyle:"none"}}>
              <li>Complete solar power plant breaks down in this centralized system</li>
              <li>Failure rate very high</li>
              <li>Not at all Flexible</li>
            </ul>
          </div>
        </div>
        <div style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
          <img style={{width:"400px",height:"400px"}} src={acSolarPannels} alt='string inverter'></img>
          <div>
            <Typography sx={{textAlign:"center",fontSize:"25px",marginTop:"5px"}}>NO Single Point of failure</Typography>
            <ul style={{listStyle:"none"}}>
              <li>Complete solar power plant never breaks down as this is Decentralized system</li>
              <li>Failure rate is very less</li>
              <li>Fully Flexible </li>
            </ul>
          </div>
        </div>
        </div>

      </Box>
      <Box sx={{marginTop:"25px"}}>
        <div style={{display:'flex',justifyContent:'space-Around',alignItems:"center"}}>
        <div>
          <img style={{width:"400px",height:"400px"}} src={solarPower} alt='solar power chart'></img>
        </div>
        <div>
          <Typography sx={{textAlign:"center"}}>Micro Panel Level Monitoring</Typography>
          <ul style={{listStyle:"none"}}>
            <li>Every panel does not produce an equal amount of power,<br></br> AC Solar Panels give you accurate <br></br>micro-level data for an energy assessment. </li>
            <li>Operate All your AC Solar Panels from your mobile app.</li>
          </ul>
        </div>
        </div>
      </Box>
      <Box sx={{marginTop:"25px"}}>
        <div style={{textAlign:"center"}}><h1>AC Solar Panels System Advanced Features</h1></div>
        <div style={{display:"flex",justifyContent:"space-Around",alignItems:"center",textAlign:"center"}}>
          <div>
            <h3 >IP67</h3>
            <Typography>
            AC Panels System is IP 67 <br></br>rated for long durability<br></br>
            </Typography>
          </div>
          <div>
            <h3 >Zero Export</h3>
            <Typography>
            Use Solar Energy only for your self-consumption by <br></br>switching to Zero Export Feature,<br></br> by this no solar power is feed into the grid
            </Typography>

          </div>
          <div>
            <h3 >Reliablity</h3>
            <Typography>
            Ac Solar Panels Comes with a long warranty period of <br></br>10 - 25 years.<br></br>These Panels are tested to last for 30+ years
            </Typography>

          </div>
          <div>
            <h3 >Technology</h3>
            <Typography>
            AC Solar Panels are future Grid ready, <br></br>they are very flexible to adjust<br></br> to future Grid Settings.
            </Typography>

          </div>
        </div>
      </Box>
      <Footer />
    </Box>
  )
}

export default Commercial
