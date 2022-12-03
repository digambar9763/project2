import { Box } from '@mui/material'
import React from 'react'
import Navbar from '../Navbar'
import Home from '../Home'
import ProductServices from '../ProductServices'
import Commercials from '../Commercials'
import AboutUs from '../AboutUs'
import Contact from '../Contact'
import Footer from '../Footer'
function HomePage() {
    return (
        <Box>
            <Navbar />
            <Home />
            <ProductServices />
            <Commercials />
            <AboutUs />
            <Contact />
            <Footer />
        </Box>
    )
}

export default HomePage
