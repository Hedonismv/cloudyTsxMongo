export enum UserActionsTypes{
    SET_USER = "SET_USER",
    LOGOUT_USER = "LOGOUT_USER"
}

export type UserAction = setUser | logoutUser

export interface setUser{
    type:typeof UserActionsTypes.SET_USER,
    payload:any
}

export interface logoutUser{
    type:typeof UserActionsTypes.LOGOUT_USER
}

export interface UserReducer {
    currentUser:{},
    isAuth:boolean
}