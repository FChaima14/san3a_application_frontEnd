import { useStyle } from './styles'
import { images } from '../../../constant/images'
import { Typography, Grid, Card, CardMedia, Button, Container} from '@material-ui/core'
import { useNavigate } from 'react-router'
import { useTheme, useMediaQuery } from '@material-ui/core'

export default function Hero() {
    const classes=useStyle()
    const theme= useTheme();
    const matches=useMediaQuery(theme.breakpoints.down('md'))
    const navigate=useNavigate()
  return (
    <Container maxWidth='xl'>
       <Grid container spacing={1} className={classes.root}>
        <Grid item xs={12} md={6} lg={6}>
          {(!matches) && <Card className={classes.cardImage}>
            <CardMedia component='img'
                       height='100%'
                       image={images.Hero}
                       alt='bannerImage'/>
          </Card>}
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Typography variant='h1' xs={5} color='primary' className={classes.hero_title}>Find the best talent in our market</Typography>
          <Typography variant='body1' color='secondary' className={classes.para}>Our site is the best place to find the best talents in ALGERIA 
                                      And get the fast service ever</Typography>
          <Button color='primary' variant='contained' className={classes.btn} onClick={()=>navigate('/Home')}>Explore More</Button>
        </Grid>
       </Grid>
    </Container>
  )
}