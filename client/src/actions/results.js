import axios from 'axios'
import {returnError} from './error'

import {GET_RESULTS, ADD_RESULT} from './types'


export const addResult = (results) => (dispatch) => {
    axios.post('/results', results )
    .then(res => dispatch({
        type: ADD_RESULT, 
        payload: res.data
    })).catch(err =>  dispatch(returnError(err.response.data, err.response.status, 'add failed')))
}


export const getResults = () => dispatch => {
   
    axios.get('/results')
    .then(res => 
        dispatch({
        type: GET_RESULTS,
        payload: res.data
    })
    )

    
}