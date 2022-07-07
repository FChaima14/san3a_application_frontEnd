import React from 'react'
import {Box, Grid, Typography, Link, TextField} from '@material-ui/core'
import { useStyle } from './style';

export default function Footer() {
    const classes=useStyle();
  return (

        <Grid container spacing={2} className={classes.footer}>
            <Grid item xs={8} md={6} lg={4} className={classes.grid}>
                <Typography variant='h4' color='secondary' className={classes.title}>
                    Fast Links
                </Typography>
                <Link color='secondary' underline="hover" href='#' className={classes.sub}>{'Home'}</Link>
                <Link color='secondary' underline="hover" href='#' className={classes.sub}>{'Categories'}</Link>
                <Link color='secondary' underline="hover" href='#' className={classes.sub}>{'Services'}</Link>
                <Link color='secondary' underline="hover" href='#'className={classes.sub}>{'Hire'}</Link>
            </Grid>
            <Grid item xs={8} md={6} lg={4} className={classes.grid}>
            <Typography variant='h4' color='secondary' className={classes.title}>
                    Other Links
                </Typography>
                <Link color='secondary' underline="hover" href='#' className={classes.sub}>{'My account'}</Link>
                <Link color='secondary' underline="hover" href='#' className={classes.sub}>{'My favorite'}</Link>
                <Link color='secondary' underline="hover" href='#' className={classes.sub}>{'Login'}</Link>
                <Link color='secondary' underline="hover" href='#' className={classes.sub}>{'Register'}</Link>
            </Grid>
            <Grid item xs={8} md={6} lg={4}  className={classes.grid}>
                <Typography variant='h4' color='secondary' className={classes.title}>
                        For more news inscribe in our newsLater
                </Typography>
                <TextField label="Email" variant="outlined" color='primary' />

            </Grid>
            <Typography variant='h4' color='secondary' className={classes.copyRight}>
                        CopyRight | Chaima @2022
            </Typography>
        </Grid>
  )
}
