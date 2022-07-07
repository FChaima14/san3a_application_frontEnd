import React ,  {useEffect} from 'react'
import { useStyle } from './style'
import { useDispatch, useSelector } from 'react-redux';
import {Pagination, PaginationItem} from '@material-ui/lab';
import { Link } from 'react-router-dom';
import { getPosts } from '../../actions/posts';


export default function Paginate({page}) {
  const classes=useStyle()
  const dispatch=useDispatch()
  const {numberOfPages}= useSelector((state)=> state.posts)

  useEffect(()=>{
    if(page) dispatch(getPosts(page));
   },[page])
  return (
    <Pagination
          classes={{ ul: classes.ul}}
          count={numberOfPages}
          page={Number(page)}
          variant='outlined'
          color='primary'
          renderItem={(item)=>(
               <PaginationItem {...item} component={Link} to={`/Home?page=${item.page}`}/>
          )}>

    </Pagination>
  )
}
