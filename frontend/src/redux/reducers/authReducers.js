import { SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constans/authConstans"

export const authReducers = (
    state = {}, {type, payload}
) => {
    switch (type) {
        case SIGNIN_REQUEST : return {...state } 
        case SIGNIN_SUCCESS : return {...state, registered:payload } 
        case SIGNIN_FAIL : return {...state, error: payload} 
            
        default: return state
    }
}