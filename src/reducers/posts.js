export default (state ={isLaoding: true, posts: []}, action)=>{
    switch(action.type){
        case 'START_LOADING':
            return {...state, isLaoding: true}
        case 'END_LOADING':
                return {...state, isLaoding: false}
        case "FETCH_ALL":
            return {
                ...state,
                posts: action.payload.data,
                currentPage: action.payload.currentPage,
                numberOfPages: action.payload.numberOfPages,
            };
        case "SEARCH":
            return {...state, posts: action.payload};
        case "FETCH_ONE":
             return {...state, post: action.payload.data};
        case "CREATE": 
            return {...state, posts: [...state, action.payload]};
        case "UPDATE": 
        case "LIKE":
            return {...state, posts: state.posts.map((post)=>post._id === action.payload._id? action.payload :post)};
        case "DELETE": 
            return {...state, posts: state.posts.filter((post)=>post._id !== action.payload)}
        default:
            return state;
    }
}