import React from 'react'
import Post from './post/post'
import {useSelector} from 'react-redux'
import { Container, Grid , CircularProgress} from '@material-ui/core'
import { useStyle } from './styles'

export default function Posts({setCourantId, setOpenProps}) {
  const classes=useStyle()
  const {posts, isLaoding} = useSelector((state)=>state.posts)
  if(!posts.length && !isLaoding) return 'NO POSTS'
  return (
      <Container className={classes.root}  maxWidth='xl'>
        {isLaoding? <CircularProgress/>:
        <Grid container spacing={2}>
          {posts.map((items)=>(
            <Grid item key={items.id} xs={12} sm={12} md={6} lg={4}>
              <Post post={items} setCourantId={setCourantId}  setOpenProps={setOpenProps}/>
            </Grid>
          ))}
        </Grid>}
    </Container>
    
  )
}
