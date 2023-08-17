import { GET_SIGNIN_FAIL, GET_SIGNIN_REQUEST, GET_SIGNIN_SUCCESS, SIGNIN_FAIL, SIGNIN_REQUEST, SIGNIN_SUCCESS } from "../constans/authConstans"
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
export const FetchregisterData = signIn => async dispatch => {
    try {
        dispatch({type: GET_SIGNIN_REQUEST })
        const {data} = await axios.get("http://localhost:5000/auth", signIn)
        dispatch({type: GET_SIGNIN_SUCCESS, payload:data })
    } catch (error) {
        dispatch({type: GET_SIGNIN_FAIL, payload: error.message })
    }
}