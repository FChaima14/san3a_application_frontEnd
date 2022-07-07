import axios from "axios";

const API=axios.create({baseURL:"https://new-san3a-app.herokuapp.com" })
API.interceptors.request.use((req)=>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization= `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req;
    });

//const url ="http://localhost:5000";

export const fetchPosts=(page)=> API.get(`post?page=${page}`);
export const fetchPost=(id)=> API.get(`post/${id}`);
export const fetchSearch=(searchQuery)=> API.get(`/post/search?searchQuery=${searchQuery.search|| 'none'}&tags=${searchQuery.tags}`)
export const addPosts=(post)=>API.post('/post/create', post)
export const updatePosts=(id, post)=>API.patch(`/post/${id}`, post)
export const deletePosts=(id)=>API.delete(`/post/${id}`)
export const likePost=(id)=>API.patch(`/post/${id}/like`)
export const loginUser=(Data)=>API.post('/user/login',Data)
export const registerUser=(Data)=>API.post('/user/register',Data)