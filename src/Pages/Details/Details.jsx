import React, {useEffect, useState} from 'react'
import {useStyle} from './style'
import { Paper, Typography, Divider, CircularProgress, Avatar, Grid, IconButton} from '@material-ui/core';
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getPost, SearchPost, likePosts } from '../../actions/posts';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import VisibilityIcon from '@mui/icons-material/Visibility';

export default function Details() {
  const classes=useStyle();
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const {id}=useParams();
  const [user, setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  const {post, posts, isLoading}=useSelector((state)=>state.posts)
  console.log(post)
  useEffect(()=>{
     dispatch(getPost(id))
  },[id])
  useEffect(()=>{
      if(post){
        dispatch(SearchPost({search: 'none', tags:post?.tags.join(',')}))
      }
  },[post])

  if(!post) return null;
  const openPost=(_id)=>{
    navigate(`../Home/${_id}`)

  }
  const Likes=()=>{
    if(post.likes.length >0) {
      return post.likes.find((like)=> like === (user?.result?.googleId || user?.result?._id))?
       (<><FavoriteIcon sx={{ color:'#f87d09'}} size='50px'/></>):
       (<><FavoriteBorderIcon sx={{ color:'#f87d09'}} size='50px'/></>)
    };
    return (<><FavoriteBorderIcon sx={{ color:'#f87d09'}} size='50px'/></>);
}
  const handelLike=(id)=>{
    dispatch(likePosts(id));
  }
  if(isLoading){
    return (<Paper elevation={6} className={classes.loadingPaper}>
               <CircularProgress size='7em'/>
           </Paper>)
  }
  const recomandedPost=posts.filter(({_id })=>_id!==post._id);
  return (
    <Paper style={{ padding: '20px', borderRadius: '15px', marginTop:'5rem' }} elevation={6}>
      <Grid container spacing={3}>
        <Grid item sx={12} md={6} sm={12} lg={8}>
          <div className={classes.imgeSection}>
            <img className={classes.media} src={post.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title}/>
          </div>
          <div>
            <div className={classes.creator}>
                <Typography variant='h4' className={classes.title} color='primary'>{post.title}</Typography>
                <IconButton onClick={()=>handelLike(post._id)} disabled={!user?.result}> 
                      <Likes/>
                </IconButton>
            </div>
            <div className={classes.creator}>
              <div className={classes.avatar}>
                <Avatar color='secondary'>A</Avatar>
                <Typography variant='body2' className={classes.avataTxt}>{post.name}</Typography>
              </div>
              <Typography variant="body1" className={classes.avataTxt}>{moment(post.created_at).fromNow()}</Typography>
            </div>
            <Divider  style={{ margin: '5px 0 10px 0' }} />
            <Typography variant='body2' className={classes.para}>{post.description}</Typography>
            <div className={classes.iconsCnt}></div>
          </div>
        </Grid>
        <Grid item sx={12} md={6} sm={12} lg={4}>
          {!!recomandedPost.length && (
            <div className={classes.section}>
              <Typography variant='h4' gutterBottom className={classes.recomanded}> You may also like</Typography>
              <Divider />
           <div>
            {recomandedPost.map(({ title, name , likes, image, _id }) => (
              <Paper elevation={6} className={classes.paper} key={_id}>
                  <Typography gutterBottom variant="h6" className={classes.title} color='primary'>{title}</Typography>
                  <Typography gutterBottom variant="subtitle2" className={classes. avataTxt}>{name}</Typography>
                  <div className={classes.creator2}>
                      <Typography gutterBottom variant="subtitle1">Likes: {likes.length}</Typography>
                      <IconButton onClick={() => openPost(_id)}>
                          <VisibilityIcon sx={{ color:'#f87d09'}} size='50px'/>
                      </IconButton>
                  </div>
                  <div className={classes.imgeSection2}>
                    <img src={image} className={classes.media2}/>
                 </div>
              </Paper>
            ))}
            </div>
            </div>
          )}
        </Grid>
      </Grid>
     
    </Paper>
  )
}

/* <div className={classes.card}>
        <div className={classes.section}>
          <Typography variant="h3" component="h2">{post.title}</Typography>
  
          <Typography gutterBottom variant="body1" component="p">{post.description}</Typography>
          <Typography variant="h6">Created by: {post.name}</Typography>
          <Typography variant="body1">{moment(post.created_at).fromNow()}</Typography>
          <Divider style={{ margin: '20px 0' }} />
          <Divider style={{ margin: '20px 0' }} />
          <Divider style={{ margin: '20px 0' }} />
        </div>
        <div className={classes.imageSection}>
          <img className={classes.media} src={post.image || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} alt={post.title} />
        </div>
      </div>*/