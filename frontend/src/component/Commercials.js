import React from 'react'
import { Box, Card,  CardContent, CardMedia, Stack, Typography} from '@mui/material'
import ap15 from './images/ap15.jpg'
import ap16 from './images/ap16.jpg'
function Commercials() {
    return (
        <Box pt='50px'>
            <div style={{ textAlign: 'center' }}>
                <Typography variant='h1' fontSize='50px' fontWeight='900'>Commercial</Typography>
            </div>
            <Stack mt='90px' direction="column">
                <Card sx={{ display: 'flex', padding: '30px' }} >
                    <CardMedia
                        component="img"
                        alt="Bunglow"
                        height="350"
                        image={ap15}></CardMedia>
                    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                        <Typography fontWeight='600'>
                            Most Advanced AC Solar Panel System
                            Perfectly Designed for your Business

                        </Typography>

                    </CardContent>
                </Card>
                <Card sx={{ display: 'flex', padding: '30px' }} >

                    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: "center" }}>
                        <Typography fontWeight='600'>
                            Commercial Projects are the most complex projects,
                            here the system should always be working and assure maximum solar power generation at high efficiency irrespective of weather conditions.
                            Our AC Solar Panel system is made perfectly for commercial purposes.<br></br>
                            {/* <Button>Lets Understand More</Button> */}

                        </Typography>
                    </CardContent>
                    <CardMedia
                        component="img"
                        alt="Bunglow"
                        height="350"
                        image={ap16}></CardMedia>
                </Card>

            </Stack>
        </Box>
    )
}

export default Commercials
