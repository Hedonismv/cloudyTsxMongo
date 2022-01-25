import {UserAction, UserActionsTypes} from "../../types/user";
import axios from "axios";
import {Dispatch} from "react";


export const registration = async (email:string, password:string) => {
    try{
        const response = await axios.post('/api/auth/registration', {
            email,
            password
        })
    } catch (e) {
        console.log(e)
    }
}


export const login = (email:string, password:string) => {
    return async (dispatch: Dispatch<UserAction>) => {
        try{
            const response = await axios.post('/api/auth/login', {
                email,
                password
            })
            dispatch({type: UserActionsTypes.SET_USER, payload: response.data.user})
            localStorage.setItem('token', response.data.token)
        }catch (e) {
            console.log(e)
        }
    }
}