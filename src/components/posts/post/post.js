import React, {useState} from 'react'
import { useDispatch} from 'react-redux'
import {Card, CardActions, CardContent, CardMedia, Typography, IconButton,
        Grid} from '@material-ui/core'
import {deletePost, likePosts} from '../../../actions/posts'
import {useStyle} from './style'
import {useNavigate} from 'react-router-dom'
//import { colors} from '../../../styles/Theme'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import VisibilityIcon from '@mui/icons-material/Visibility';



export default function Post({post, setCourantId, setOpenProps}){
  const dispatch=useDispatch()
  const classes= useStyle()
  const navigate=useNavigate()
  const [user, setUser]=useState(JSON.parse(localStorage.getItem('profile')));
  const Likes=()=>{
      if(post.likes.length >0) {
        return post.likes.find((like)=> like === (user?.result?.googleId || user?.result?._id))?
         (<><FavoriteIcon sx={{ color:'#f87d09'}} size='50px'/></>):
         (<><FavoriteBorderIcon sx={{ color:'#f87d09'}} size='50px'/></>)
      };
      return (<><FavoriteBorderIcon sx={{ color:'#f87d09'}} size='50px'/></>);
  }
  const handleUpdate=(id)=>{
    setCourantId(id)
    setOpenProps(true)
  }
  const handelLike=(id)=>{
    dispatch(likePosts(id));
  }
  const openPost=(id)=>{
     navigate(`../Home/${id}`);
  }
  //console.log(data)
  return (
    <Card elevation={3}>
        <CardMedia component='img' image={post.image} title={post.title} height='194'></CardMedia>
        <CardContent>
              <Typography className={classes.tags} variant='body2'>{post.tags.map((tag)=>`#${tag}`)}</Typography>
              <Typography color='secondary' variant='h5'>{post.title}</Typography>
         <CardActions>
           <Grid container spacing={2}>
              <Grid item xs={8} className={classes.icons}>
                <IconButton onClick={()=>handelLike(post._id)} disabled={!user?.result}> 
                  <Likes/>
                </IconButton>
                <IconButton onClick={()=>openPost(post._id)}>
                     <VisibilityIcon sx={{ color:'#f87d09'}} size='50px'/>
                </IconButton>
                {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) &&(
                <IconButton onClick={()=>dispatch(deletePost(post._id))}>
                    <DeleteForeverIcon   sx={{ color:'#f87d09'}}  size='50px'/>
                 </IconButton>)}
              </Grid>
              {(user?.result?.googleId === post?.creator || user?.result?._id === post?.creator) &&(
                <Grid item xs={4} className={classes.edit}>
                <IconButton aria-label="settings"  onClick={()=>handleUpdate(post._id)}>
                    <MoreVertIcon sx={{ color:'#f87d09'}}  size='50px' />
                </IconButton>
               </Grid>)}
            </Grid>
         </CardActions>
      </CardContent>
    </Card>
  )
}
