import * as api from '../api'

/// login action functionality
export const login=(Data, navigate)=>async(dispatch)=>{
    try{
       const {data} = await api.loginUser(Data);
       console.log(data)
       dispatch({type: 'AUTH' , data})
       navigate('/Home')

    }catch(error){
        console.log(error.message)
    }

}

export const register=(Data, navigate)=>async(dispatch)=>{
    try{
        const {data}=await api.registerUser(Data);
        console.log(data)
        dispatch({type: 'AUTH' , data})
        navigate('/Home')
    }catch(error){
        console.log(error)
    }
}