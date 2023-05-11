

import { useReducer } from "react";

type authUser = {
    name:string;
    username:string;
    email: string;
    password: string;
}
interface login {
    type: "LOGIN"
    payload: authUser
}
interface logout {
    type: "LOGOUT"
    payload: null
}
export type userActions = login | logout

const INITIALSTATE = {
    currUser: null
}
export const userReducer = (state: authUser|null, action:userActions) => {
    switch(action.type){
        case "LOGIN":
            return {...state, currUser: action.payload};
        case "LOGOUT":
            return {...state, currUser: action.payload}
        default:
            return state
    }
}