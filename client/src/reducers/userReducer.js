import {
    USER_LOADING,
    USER_LOADED,
    LOGIN_SUCCESS,
    LOGIN_FAILED,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAILED,
    AUTH_ERROR
} from '../actions/types'

const initialState ={
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user: null
}

export default function(state =initialState, action){
    switch(action.type){
        case USER_LOADING:
            return{
                ...state,
                isLoading:true
            }
        case USER_LOADED:
            return{
                ...state,
                isLoading: false,
                isAuthenticated:true,
                user: action.payload  
           }  
           case LOGIN_SUCCESS:
           case REGISTER_SUCCESS:
               localStorage.setItem('token', action.payload.token)
               return{
                   ...state,
                   ...action.payload,
                   isLoading: false,
                   isAuthenticated: true
               }  
            case REGISTER_FAILED:
            case LOGIN_FAILED:
            case AUTH_ERROR:
            case LOGOUT_SUCCESS:
                localStorage.removeItem('token')
                return{
                    ...state,
                    token: null,
                    user: null,
                    isAuthenticated: false,
                    isLoading: false
                }
            default:
                return state                   
    }
}