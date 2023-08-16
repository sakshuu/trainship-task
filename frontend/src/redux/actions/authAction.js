import { SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constans/authConstans"
import axios from "axios"

export const register = signIn => async dispatch => {
    try {
        dispatch({type: SIGNIN_REQUEST })
        const {data} = await axios.post("http://localhost:5000/auth", signIn)
        dispatch({type: SIGNIN_SUCCESS, payload:data })
    } catch (error) {
        dispatch({type: SIGNIN_FAIL, payload: error.message })
    }
}