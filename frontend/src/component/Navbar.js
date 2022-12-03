import React, { useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { Stack, Card } from '@mui/material'
import { Typography,Alert} from '@mui/material'
import CloseIcon from '@mui/icons-material/Close';
import logo from './images/logo.png'
import axios from "../axios"
function Navbar() {
  const [show, setShow] = useState(false)
  const [ShowReg,setShowReg]=useState(true)
  const [success, setSuccess] = useState(false)
  const [failure, setFailure] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [passward, setPassward] = useState("")
  const handleClick = () => {
    setShow(true)
  }
  const Click =()=>{
    setShowReg(false)
    setShow(false)
  }
  const Submit = async (e) => {
    e.preventDefault()
    setName(" ")
    setPassward(" ")
    setEmail(" ")
    const newUser = {
      username: name,
      email: email,
      passward: passward
    }
    try {
      await axios.post("/users/register", newUser)
      setSuccess(true)
      setFailure(false)


    } catch (err) {
      console.log(err)
      setSuccess(false)
      setFailure(true)
    }

  }
  return (

    <>
      <Box paddingRight={5} paddingLeft={5} >
        <Stack direction='row' justifyContent='space-between' alignItems='center'>
          <div style={{padding:"10px"}}>
            <img style={{width:"100px",height:"100px"}} src={logo} alt='logo'></img>
          </div>
          <Stack direction='row' gap={4}>
            <a style={{textDecoration:"none",color:"black"}} href="#home"><Typography sx={{ cursor: "pointer",fontWeight:"600" }}>HOME</Typography></a>
            <a style={{textDecoration:"none",color:"black"}} href="#product&services"><Typography sx={{ cursor: "pointer",fontWeight:"600" }}>PRODUCTS & SERVICES</Typography></a>
            <Typography sx={{ cursor: "pointer",fontWeight:"600" }}>AP-CARES</Typography>
            <Typography sx={{ cursor: "pointer",fontWeight:"600" }} onClick={handleClick}>ACCOUNT</Typography>
            <a style={{textDecoration:"none",color:"black"}}href='#about'><Typography sx={{ cursor: "pointer",fontWeight:"600" }} >ABOUT US</Typography></a>
            <a style={{textDecoration:"none",color:"black"}}  href="#contact"><Typography sx={{ cursor: "pointer",fontWeight:"600" }}>CONTACTS</Typography></a>
          </Stack>
        </Stack>
      </Box>
      {<form onSubmit={(e) => Submit(e)}>
        <Card sx={show ? { position: "absolute", height: '530px', width: "400px", right: "120px", top: "65px", } : { display: "none" }}>
        {success && <Alert severity="success" sx={{ width: "100%" }}>Registered successful</Alert>}
          {failure && <Alert severity="error" sx={{ width: "100%" }}>Something went wrong username already exist</Alert>}
          <CloseIcon onClick={()=>setShow(false)} fontSize="large" sx={{position:"relative",left:"340px",top:"5px",cursor:"pointer"}}/>
          <Stack textAlign='center' margin="10px">
            <div style={{margin:"10px 0 10px 0"}}>
              <Typography fontWeight="800">Login To My Account</Typography>
              <Typography fontWeight="400">Enter Your Email And Passward</Typography>
            </div>
            <div style={{display:"flex",flexDirection:"column",margin:"10px 0 10px 0"}}>
              <TextField label='username' sx={{margin:"10px 0 10px 0"}} variant='filled'></TextField>
              <TextField label='passward' sx={{margin:"10px 0 10px 0"}} variant='filled'></TextField>
              <div style={{display:"flex",flexDirection:"column",margin:"10px 0 10px 0"}} >
                <Button type="submit" variant="contained">Login</Button>
              </div>
            </div>
            <div style={{margin:"10px 0 10px 0"}}>
              <span>New User ?</span><Typography fontWeight="800" onClick={Click} type='submit'>Create Your Account</Typography>
            </div>
          </Stack>
        </Card>
        </form>
      }
      {<form onSubmit={(e) => Submit(e)}>
        <Card sx={ShowReg ? { display: "none" }:{ position: "absolute", height: '570px', width: "400px", right: "120px", top: "65px" }}>
          <CloseIcon onClick={()=>setShowReg(true)} fontSize="large" sx={{position:"relative",left:"340px",top:"5px",cursor:"pointer"}}/>
          {success && <Alert severity="success" sx={{ width: "100%" }}>Registered successful</Alert>}
          {failure && <Alert severity="error" sx={{ width: "100%" }}>Something went wrong username already exist</Alert>}
          <Stack textAlign='center' margin="10px">
            <div style={{margin:"10px 0 10px 0"}}>
              <Typography fontWeight="800">Create  My Account</Typography>
              <Typography fontWeight="400">Please Fill THe Information Below</Typography>
            </div>
            <div style={{display:"flex",flexDirection:"column",margin:"10px 0 10px 0"}}>
            <TextField value={name} onChange={(e) => setName(e.target.value)} label='username' sx={{margin:"10px 0 10px 0"}} variant='filled'></TextField>
            {/* <TextField label='Lastname' sx={{margin:"10px 0 10px 0"}} variant='filled'></TextField> */}
              <TextField value={email} onChange={(e) => setEmail(e.target.value)} label='email address' sx={{margin:"10px 0 10px 0"}} variant='filled'></TextField>
              <TextField value={passward} onChange={(e) => setPassward(e.target.value)} label='passward' sx={{margin:"10px 0 10px 0"}} variant='filled'></TextField>
              <div style={{display:"flex",flexDirection:"column",margin:"10px 0 10px 0"}} >
                <Button type="submit" variant="contained">Create My Account</Button>
              </div>
            </div>
            <div style={{margin:"10px 0 10px 0"}}>
              <span>Alredy Have Account ?</span><Typography fontWeight="800" onClick={()=>{setShowReg(true);setShow(true)}}>Login Here</Typography>
            </div>
          </Stack>
        </Card>
        </form>
      }
    </>


  )
}

export default Navbar
