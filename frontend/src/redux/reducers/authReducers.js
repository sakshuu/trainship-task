import { GET_SIGNIN_FAIL, GET_SIGNIN_REQUEST, GET_SIGNIN_SUCCESS, SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constans/authConstans"

export const authReducers = (
    state = {dataSignup:[]}, {type, payload}
) => {
    switch (type) {
        case SIGNIN_REQUEST : return {...state } 
        case SIGNIN_SUCCESS : return {...state, registered:payload } 
        case SIGNIN_FAIL : return {...state, error: payload} 

        case GET_SIGNIN_REQUEST : return {...state } 
        case GET_SIGNIN_SUCCESS : return {...state, dataSignup:payload } 
        case GET_SIGNIN_FAIL : return {...state, error: payload} 
            
        default: return state
    }
}