import { Container, TextField, Button, Grid, InputAdornment} from '@material-ui/core'
import { useDispatch} from 'react-redux'
import React,{useState} from 'react'
import { login } from '../../actions/auth'
import {GoogleLogin} from 'react-google-login'
import { useStyle } from './style'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { IconButton } from '@mui/material'
import { useNavigate } from 'react-router'

const initialState={ email: '', password:''};
export default function SignIn({setOpenProps3, setOpenProps2}) {
    const classes=useStyle()
    const [hide, setHide]=useState(true)
    const [Data, setData]=useState(initialState)
    const dispatch=useDispatch()
    const navigate= useNavigate()
    const handleSwitch=()=>{
        setOpenProps2(false)
        setOpenProps3(true)
    }
    const handleChange=(e)=>{
        setData({...Data, [e.target.name]: e.target.value})
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(Data)
        dispatch(login(Data, navigate))
        setOpenProps2(false)
    }
    const handleHidePassword=()=>{
        setHide(!hide);
    }
    const googleSucces=async(res)=>{
        const result=res?.profileObj;
        const token=res?.tokenId;
        try{
          dispatch({type: 'AUTH', data: {result, token}})
          console.log(result)
          navigate('/Home')
        }catch(error){
           console.log(error)
        }
     }
     const googleFailure=(error)=>{
         console.log(error)
         console.log('Google Sign in unsuccessful try later')
     }
  return (
    <>
    <Container>
        <form onSubmit={handleSubmit} style={{ justifyContent:'column'}}>
            <Grid container spacing={3}>
                <Grid item xs={12} md={12}> 
                    <TextField variant='outlined'
                                label='Email'
                                required
                                fullWidth
                                autoFocus
                                name='email'
                                type="email"
                                onChange={handleChange}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="end">
                                         <MailOutlineIcon sx={{color: '#7F8487'}}/>
                                      </InputAdornment>
                                    ),
                                  }}>
                    </TextField>
                </Grid> 
                <Grid item xs={12} md={12}>
                <TextField variant='outlined'
                            label='Password'
                            required
                            autoFocus
                            fullWidth
                            type={hide? "password": "text"}
                            name='password'
                            onChange={handleChange}
                            InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                     <IconButton onClick={handleHidePassword}>
                                         {hide? <VisibilityOffIcon/>: <VisibilityIcon/>}
                                      </IconButton>
                                  </InputAdornment>
                                ),
                              }}>
                </TextField>
                </Grid> 
            </Grid> 
            <Button type='submit' variant='contained' color='primary' fullWidth className={classes.btn}>SignIn</Button>
            <GoogleLogin
                clientId='293832291095-3sgrp6qic6kjh0jhntmet4funrl2enk9.apps.googleusercontent.com'
                render={(renderProps)=>(
                    <Button
                         color='primary'
                         onClick={renderProps.onClick}
                         disabled={renderProps.disabled}
                         variant='contained' fullWidth
                         className={classes.btn}> 
                         Google Sign In
                        </Button>)}
                        onSuccess={googleSucces}
                        onFailure={googleFailure}
                        cookiePolicy='single_host_origin'/>
            <Grid conatiner justifyContent='flex-end'>
                <Grid item>
                    <Button className={classes.signBtn} onClick={handleSwitch}>
                         You Dont have acoount so Sign Up
                    </Button>

                </Grid>
            </Grid>
        </form>
        
    </Container>
    </>

  )
}
