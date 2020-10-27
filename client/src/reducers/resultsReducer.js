import {GET_RESULTS, ADD_RESULT } from '../actions/types'

const initState={
    results: [],
    loading: false
}


const resultsReducer =(state = initState, action) =>{
    
    switch(action.type){
        case GET_RESULTS:
            return{
                ...state,
                results: action.payload,
                loading: false 
            };
       
            case ADD_RESULT:
                    return{
                        ...state,
                        results: [action.payload, ...state.results]
                    };  
                  
            default:
                return state;
    } 
    
}

export default resultsReducer