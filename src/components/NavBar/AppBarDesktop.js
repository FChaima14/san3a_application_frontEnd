import React, {useState, useEffect} from 'react'
import { AppBar, Toolbar, Typography, Button} from '@material-ui/core'
import {Link, useLocation} from 'react-router-dom'
import { useStyle } from './styles'
import { useNavigate } from 'react-router'
import decode from 'jwt-decode';
import { Box } from '@mui/system'
import { useDispatch } from 'react-redux'

export default function AppBarDesktop({setOpenProps, setOpenProps2, setOpenProps3}) {
  const classes=useStyle()
  const navigate=useNavigate()
  const [user, setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  console.log(user?.result.username)
  const location =useLocation()
  useEffect(()=>{
    const token=user?.token;
    if(token){
      const decodeToken=decode(token);
      if(decodeToken.exp *1000 < new Date().getTime()) logout();
    }
    setUser(JSON.parse(localStorage.getItem('profile')))
  },[location])
  const logout=()=>{
    dispatch({type: 'LOGOUT'})
    setUser(null)
    navigate('/Home')
  }
  const dispatch=useDispatch()
  return (
    <>
     <AppBar position='fixed' color='#fcfcfc'>
        <Toolbar className={classes.root}>
          <Typography  component={Link}  to='/' variant='h4'fontSize={28} className={classes.txt} color='primary' >San3a</Typography>
          <Typography color='secondary'></Typography> 
           {!user ? <Box className={classes.btnBox}>
             <Button variant='contained' color='primary' className={classes.btn} onClick={()=> setOpenProps2(true)}>login</Button>
             <Button variant='outlined' color='primary' className={classes.btn} onClick={()=> setOpenProps3(true)}>Register</Button>
             </Box>:
            <Box className={classes.btnBox}>
              <Button  variant='contained' color='primary' className={classes.btn} onClick={logout}>Logout</Button>
              <Button  variant='contained' color='primary' className={classes.btn} onClick={()=> setOpenProps(true)}>Post</Button></Box>}
            
        </Toolbar>  
          
      </AppBar>
    </>
  )
}
