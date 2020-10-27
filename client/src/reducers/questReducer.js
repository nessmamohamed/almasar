import {GET_QUESTS, GET_QUEST, ADD_QUEST, DELETE_QUEST } from '../actions/types'

const initState={
    quests: [],
    quest: false,
    loading: false
}


const questReducer =(state = initState, action) =>{
    
    switch(action.type){
        case GET_QUESTS:
            return{
                ...state,
                quests: action.payload,
                loading: false 
            };
            case GET_QUEST:
                return{
                    ...state,
                    quest: action.payload,
                    loading: false 
                };    
        case DELETE_QUEST:
           
            return{
               
                ...state,
                quests: state.quests.filter(quest=> quest._id !== action.payload)
                
            }  
            case ADD_QUEST:
                    return{
                        ...state,
                        quests: [action.payload, ...state.quests]
                    };  
                  
            default:
                return state;
    } 
    
}

export default questReducer