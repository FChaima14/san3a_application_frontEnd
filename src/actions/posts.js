import * as api from '../api'

//action to get the posts

export const getPosts =(page)=>async (dispatch)=>{
    try{
        dispatch({type: 'START_LOADING'});
        const {data} = await api.fetchPosts(page);
        console.log(data)
        dispatch({type : 'FETCH_ALL', payload: data});
        dispatch({type: 'END_LOADING'});
 
    } catch(error){
        console.log(error.message)
    }
}
//action to get the post by Id
export const getPost =(id)=>async (dispatch)=>{
    try{
        dispatch({type: 'START_LOADING'});
        const {data} = await api.fetchPost(id);
        console.log(data)
        dispatch({type : 'FETCH_ONE', payload: data});
        dispatch({type: 'END_LOADING'});
 
    } catch(error){
        console.log(error.message)
    }
}
//action for creating data
export const createPost =(post)=>async(dispatch)=>{
    try{
        const {data}=await api.addPosts(post);
        dispatch({type: 'CREATE', payload: data})
    } catch(error){
        console.log(error.message)
    }
}

//action for updatibg the posts
export const updatePost=(id, post)=>async(dispatch)=>{
    try{
        const {data} =await api.updatePosts(id, post);
        dispatch({type:'UPDATE', payload: data})
    } catch(error){
        console.log(error.message)
    }
}

//action to delete the post
export const deletePost=(id)=>async(dispatch)=>{
    try{
        await api.deletePosts(id)
        dispatch({type:'DELETE', payload: id})
    } catch(error){
        console.log(error.message)
    }
}

//action for like post
export const likePosts=(id)=>async(dispatch)=>{
    try{
       const {data}= await api.likePost(id)
       //console.log(data)
       dispatch({type: 'LIKE', payload: data})
    }catch(error){
        console.log(error.message)
    }
}
//action for search post
export const SearchPost=(searchQuery)=>async(dispatch)=>{
    try{
        dispatch({type: 'START_LOADING'});
       const { data: {data} }= await api.fetchSearch(searchQuery);
       dispatch({type: 'SEARCH', payload: data})
       dispatch({type: 'END_LOADING'});
       console.log(data)
    }catch(error){
        console.log(error)
    }
}