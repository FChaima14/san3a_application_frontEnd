import { Container, Typography, Box, Grid, Button } from '@material-ui/core'
import React from 'react'
import { useStyle } from './style'
import { images } from '../../../constant/images'
import { useNavigate } from 'react-router'

export default function Service({setOpenProps3}) {
    const classes=useStyle()
    const navigate=useNavigate();
  return (
     <Container>
         <Typography variant='h1' color='secondary' className={classes.aboutTitle}> Our site offer you </Typography>
        <Typography variant='body2' className={classes.aboutTitlePara} color='warning'>
                   You are a talanted worker, or want to hire one. you are in the suitable place . Begin 
                   your busnnes and profit our offers.
         </Typography>
        <Grid container spacing={2} className={classes.box}>
            <Grid item xs={8} md={8} lg={6}  className={classes.boxgrid}>
                <Box className={classes.imgBox}>
                    <img src={images.Service2} alt='getJob' className={classes.image}></img>
                </Box>
                <Typography variant='body1' color='secondary' className={classes.subTitle}>
                    You are a worker
                </Typography>
                <Typography variant='body2' className={classes.Para} color='warning'>
                    You are to a free worker, talented and want to get hired. Create a 
                    profil, create your gallery and begin making money .
                    </Typography>
                <Button variant='contained' color='primary'  onClick={()=>{setOpenProps3(true)}} className={classes.btn}>Register</Button>
            </Grid>
            <Grid item xs={8} md={8} lg={6}  className={classes.boxgrid}>
                <Box className={classes.imgBox}>
                    <img src={images.Service1} alt='getJob' className={classes.image}></img>
                </Box>
                <Typography variant='body1' color='secondary' className={classes.subTitle}>
                    You want to hire a worker 
                </Typography>
                <Typography variant='body2' className={classes.Para} color='warning'>
                    You want to hire some  workers get acces to our platform and
                    profit of our service to make it fast and easy.
                    </Typography>
             <Button variant='contained' color='primary' onClick={()=>navigate('/Home')} className={classes.btn}>Hire</Button>
             </Grid>

        </Grid>
     </Container>
  )
}
