import {AnyAction} from "redux";

interface UserReducer {
    currentUser:object,
    isAuth:boolean
}

const initialState :UserReducer = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = initialState, action: AnyAction) {
    switch (action.type){
        default:
            return state
    }
}