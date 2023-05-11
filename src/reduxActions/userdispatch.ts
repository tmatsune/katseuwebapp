import { Dispatch } from "redux"
import { userActions } from "../reducer/userReduce"

type authUser = {
    name:string;
    username:string;
    email: string;
    password: string;
}

export const loginUser = (user:authUser) => {
    return (dispatch: Dispatch<userActions>) => {
        dispatch({
            type:"LOGIN",
            payload: user
        })
    }
}
export const logOutUser = () => {
    return (dispatch:Dispatch<userActions>) => {
        dispatch({
            type:"LOGOUT",
            payload: null
        })
    }
}