import axios from 'axios'
import {returnError} from './error'

import {GET_QUEST, GET_QUESTS, DELETE_QUEST, ADD_QUEST} from './types'


export const addQuest = (questions) => (dispatch, getState) => {
    axios.post('/quest', questions )
    .then(res => dispatch({
        type: ADD_QUEST, 
        payload: res.data
    })).catch(err =>  dispatch(returnError(err.response.data, err.response.status, 'add failed')))
}


export const getQuests = () => dispatch => {
   
    axios.get('http://localhost:5000/quest')
    .then(res => 
        dispatch({
        type: GET_QUESTS,
        payload: res.data
    })
    )

    
}

export const getQuest = (id) => dispatch => {
   
    axios.get(`http://localhost:5000/quest/${id}`)
    .then(res => 
        dispatch({
        type: GET_QUEST,
        payload: res.data
    })
    )

    
}

export const deleteQuest = (id) => (dispatch) => {
    axios.delete(`/quest/${id}`)
    .then(res => dispatch({
        type: DELETE_QUEST,
        payload: id
    }))
}