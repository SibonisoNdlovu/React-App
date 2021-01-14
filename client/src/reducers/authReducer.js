import { FETCH_USER } from '../actions/types'

//responsile for determining whether user is logged in or not
export default function(state=null, action){
    switch(action.type) {
        case FETCH_USER:
            return action.payload || false;
        default:
            return state;
    };
};