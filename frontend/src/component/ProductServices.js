import React from 'react'
import { Box, Stack, Typography, Card, CardContent, CardMedia ,CardActionArea,Button} from '@mui/material'
import Bunglow from './images/Bunglow.jpg'
import Recedentials from './images/recedential.jpg'
import commercial3 from './images/commercial3.jpg'
import {Link} from 'react-router-dom'
function ProductServices() {
    return (
        <Box id="product&services" pt='50px'>
            <div style={{textAlign:'center'}}>
            <Typography variant='h1' fontSize='50px' fontWeight='900'>Product And Services</Typography>
            </div>
            <Stack mt='90px' direction="row" justifyContent='center' gap='70px' >
                <Card sx={{ maxWidth: 345,padding:'5px'}}>
                    <CardMedia
                        component="img"
                        alt="Bunglow"
                        height="140"
                        image={Bunglow}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" fontWeight="500" component="div">
                            Bunglow
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Simple Smart And Safe Ac Solar Pannels For Your Home
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                       <Link to='/features'><Button >Read-More</Button></Link> 
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345,padding:'5px' }}>
                    <CardMedia
                        component="img"
                        alt="Bunglow"
                        height="140"
                        image={Recedentials}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5"  fontWeight="500" component="div">
                            Recedentials
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Now Forget About Paying Heavy Electricity Bills For Your Energy Needs
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <Link to='/features'><Button>Read-More</Button></Link>
                    </CardActionArea>
                </Card>
                <Card sx={{ maxWidth: 345,padding:'5px' }}>
                    <CardMedia
                        component="img"
                        alt="Bunglow"
                        height="140"
                        image={commercial3}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5"  fontWeight="500"  component="div">
                            Commercials
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Ac Solar Panels Are The Most Advance And Smart Investment For 
                            Your Future Growth
                        </Typography>
                    </CardContent>
                    <CardActionArea>
                        <Link to='/commercial'> <Button>Read-More</Button></Link>
                    </CardActionArea>
                </Card>


            </Stack>

        </Box>
    )
}

export default ProductServices
