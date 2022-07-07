import React, { useState, useEffect } from 'react'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { TextField, Grid, Box, Button } from '@material-ui/core';
import { useStyle } from './style';

export default function FormAdd({ courantId, setCourantId, setOpenProps}) {
  const classes = useStyle()
  const dispatch = useDispatch()
  const user=JSON.parse(localStorage.getItem('profile'));
  const post = useSelector((state) => courantId ? state.posts.posts.find((p) => p._id === courantId) : null)
  const [postData, setPostData] = useState({ title: '', description: '', image: '', tags: '' })
  useEffect(() => {
    if (post) setPostData(post)
  }, [post])
  const clear = () => {
    setCourantId(null);
    setPostData({ title: '', description: '', image: '', tags: '' })
  }
  const handleSubmit = (e) => {
    if (courantId) {
      dispatch(updatePost(courantId, {...postData, name: user?.result?.username}))
      clear()
      setOpenProps(false)
    } else {
      e.preventDefault();
      dispatch(createPost({...postData, name: user?.result?.username}))
      setOpenProps(false)
    }
    clear()
  }
  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
              <TextField  variant='outlined'
                          label='Title'
                          value={postData.title}
                          onChange={(e) => setPostData({ ...postData, title: e.target.value })}></TextField>
              <TextField variant='outlined' 
                          label='Description'
                          value={postData.description}
                          onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
          </Grid>
          <Grid item xs={6}>
            <TextField variant='outlined' 
                       label='Tags'
                       value={postData.tags}
                       onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',') })} />
            <Box className={classes.file}>
                  <FileBase type='file'
                            multiple={false}
                            onDone={({ base64 }) => setPostData({ ...postData, image: base64 })} />
              </Box>
            <Box className='btnBx'>
              <Button variant='outlined' type='submit' color='primary' className={classes.btn}>Submit</Button>
              <Button variant='outlined' color='primary' className={classes.btn} onClick={clear}>Cancel</Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  )
}
