import { Container, TextField, Button, Grid, InputAdornment, IconButton} from '@material-ui/core'
import React, {useState} from 'react'
import { useDispatch } from 'react-redux';
import { register } from '../../actions/auth';
import { useStyle } from './style';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import { useNavigate } from 'react-router';

const initialState={email:'', firstName:'', lastName:'', password:'', confirmPassword:''};
export default function SignUp({setOpenProps3, setOpenProps2}) {
  const classes=useStyle()
  const [hide, setHide]=useState(true)
  const [Data, setData]=useState(initialState)
  const dispatch=useDispatch()
  const navigate= useNavigate()
  const handleSwitch=()=>{
    setOpenProps2(true)
    setOpenProps3(false)
   }
  const handleChange=(e)=>{
    setData({...Data, [e.target.name]: e.target.value})
  }
  const handleHidePassword=()=>{
    setHide(!hide);
}
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(Data)
    dispatch(register(Data, navigate))
    setOpenProps3(false)
  }
  return (
    <>
    <Container>
        <form onSubmit={handleSubmit}>
             <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField variant='outlined'
                              label='FirstName'
                              required
                              autoFocus
                              fullWidth
                              name='firstName'
                              onChange={handleChange}
                              InputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                     <PersonOutlineIcon sx={{color: '#7F8487'}}/>
                                  </InputAdornment>
                                ),
                              }}>
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField variant='outlined'
                                label='LastNeme'
                                required
                                autoFocus
                                fullWidth
                                name='lastName'
                                onChange={handleChange}
                                InputProps={{
                                  endAdornment: (
                                    <InputAdornment position="end">
                                       <PersonOutlineIcon sx={{color: '#7F8487'}}/>
                                    </InputAdornment>
                                  ),
                                }}>
                    </TextField>
                  </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField variant='outlined'
                              label='Email'
                              name='email'
                              required
                              autoFocus
                              fullWidth
                              type='email'
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
                <Grid item xs={12} sm={12}>
                  <TextField variant='outlined'
                              label='Password'
                              name='password'
                              required
                              autoFocus
                              fullWidth
                              type={hide? 'password': 'text'}
                              onChange={handleChange}
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
                <Grid item xs={12} sm={12}>
                  <TextField variant='outlined'
                            required
                            autoFocus
                            fullWidth
                            label='Confirm Password'
                            name='confirmPassword'
                            type={hide? 'password': 'text'}
                            onChange={handleChange}
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
                <Button type='submit' variant='contained' color='primary' fullWidth className={classes.btn}>Register</Button>
                <Grid conatiner justifyContent='flex-end'>
                <Grid item justifyContent='flex-end'>
                    <Button className={classes.signBtn} onClick={handleSwitch}>
                         You Allready have an account so Sign In
                    </Button>

                </Grid>
            </Grid>
            </form>
    </Container>
    </>
  )
}
