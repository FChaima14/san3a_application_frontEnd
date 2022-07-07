import React, {useState} from 'react'
import {Container, Paper, AppBar, TextField, Button} from '@material-ui/core'
import { useNavigate, useLocation } from 'react-router'
import { useDispatch } from 'react-redux'
import { SearchPost } from '../../actions/posts'
import FormAdd from '../../components/Form/Form'
import Posts from '../../components/posts/posts'
import { useStyle } from './Style'
import ProUp from '../../components/proUp/ProUp'
import Paginate from '../../components/Pagination/pagination'
import { Grid, Typography } from '@mui/material'

function useQuery(){
  return new URLSearchParams(useLocation().search)
}

export default function Home({openProps, setOpenProps}) {
    const dispatch=useDispatch()
    const [user, setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const classes=useStyle()
    const navigate=useNavigate()
    const [search, setSearch]=useState('')
    const query=useQuery()
    const page=query.get('page') || 1;
    const [tags, setTags]=useState([])
    const searchQuery=query.get('searchQuery')
    const [courantId, setCourantId]=useState(null)
    const searchPost=()=>{

      if(search.trim() || tags){  //test if it's not null
          dispatch(SearchPost({search, tags: tags.join(',')}))
          navigate(`../Home/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`);
      }else{
        navigate('/Home')
      }
    }
    const handleSearch=(e)=>{
      if(e.keyCode === 13){
        searchPost()
      }
    }
  return (
    <Container maxWidth="xl">
       <Grid container justify="space-between" alignItems="stretch" spacing={3} className={classes.gridContainer}>
          <Grid item xs={12} sm={6} md={9}>
             <Posts setCourantId={setCourantId}  setOpenProps={setOpenProps}/>
          </Grid>
          <Grid item xs={12} sm={6} md={3}  className={classes.search}>
            <AppBar position='static' color='inherit' className={classes.appSearch}>
              <TextField 
                    name='search'
                    variant='outlined'
                    label='Search'
                    onKeyPress={handleSearch}
                    fullWidth
                    value={search}
                    onChange={(e)=>{setSearch(e.target.value)}}>
              </TextField>
              <Button variant='contained' color='primary' className={classes.btn}
                      onClick={searchPost}>Search</Button>
            </AppBar>
             <Paper elevation={6} className={classes.pagination}>
                <Paginate page={page}/>
            </Paper>
            {!user && (<Paper elevation={6} className={classes.txt}>
                <Typography variant="body2" color='secondary' className={classes.para}>
                   Add your post, Like , Register Now!
                </Typography>
            </Paper>)}
          </Grid>
       </Grid>
        <ProUp openProps={openProps}
                setOpenProps={setOpenProps}
                title=' Add new Post'> 
            <FormAdd courantId={courantId} 
                        setCourantId={setCourantId} setOpenProps={setOpenProps}/>
            
      </ProUp>
    </Container> 
  )
}
/* appBar  banner categories postes services footer */
