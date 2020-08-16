import ActionTypes from "./actionTypes";

const AppReducer = (state,action)=>{
    switch(action.type){
        case ActionTypes.SET_ACCESS_TOKEN:
            localStorage.setItem('token',action.payload)
            return {
                ...state , accessToken: action.payload, isAuthenticated:true
            };
        case ActionTypes.SET_CURRENT_USER:
            return { ...state, user: action.payload, isAuthenticated:true};
        case ActionTypes.SET_PLAYLISTS:
            return {
                ...state, playlists: action.payload
            }
        case ActionTypes.GET_DISCOVER_WEEKLY:
            return { ...state, discover_weekly: action.payload };
        case ActionTypes.TOKEN_EXPIRED:
            localStorage.removeItem('token');
            return { ...state,user:null,accessToken:null,isAuthenticated: false }
        default:
            return state
    }
}

export default AppReducer;