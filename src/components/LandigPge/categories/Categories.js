import { Paper } from '@material-ui/core';
import { Typography , Grid, Container} from '@mui/material';
import React from 'react'
import Slider from "react-slick";
import { categories } from '../../../constant/categoriesList';
import {useStyle} from './style'

export default function Categories() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      };
      const classes=useStyle()
  return (
    <Container>
         <Slider {...settings}>
          {categories.map((item)=>{return(
                <Paper className={classes.root}>
                  <img src={item.image} className={classes.image}></img>
                  <Typography variant='body1'>{item.title}</Typography>
               </Paper>
          )})}
         </Slider>
    </Container>
  )
}
