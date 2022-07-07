import React from 'react'
import {Container} from '@material-ui/core'
import Hero from '../../components/LandigPge/Hero/Hero'
import Service from '../../components/LandigPge/services/Service'
import Footer from '../../components/LandigPge/Footer/Footer'

//import Categories from '../../components/LandigPge/categories/Categories'
export default function Landing({setOpenProps3}) {
  return (
        <Container maxWidth='xl'>
            <Hero/>
            <Service setOpenProps3={setOpenProps3}/>
            <Footer/>
        </Container>
  )
}
