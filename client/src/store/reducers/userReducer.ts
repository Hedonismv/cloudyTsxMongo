import {UserAction, UserActionsTypes, UserReducer} from "../../types/user";



const initialState :UserReducer = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = initialState, action: UserAction):UserReducer {
    switch (action.type){
        case UserActionsTypes.SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

