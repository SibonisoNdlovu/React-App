import axios from 'axios';
import { FETCH_USER } from './types'

 export const fetchUser = () => async dispatch => {
        const res = await axios.get('/api/current_user'); //make request

        dispatch({ type: FETCH_USER, payload: res.data }); //dispatch action when we have a response
    };

export const handleToken = (token) => async dispatch => {
        const res = await axios.post('/api/stripe', token);

        dispatch({ type: FETCH_USER, payload: res.data});
    };