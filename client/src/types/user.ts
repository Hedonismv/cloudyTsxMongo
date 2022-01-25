export enum UserActionsTypes{
    SET_USER = "SET_USER"
}

export type UserAction = setUser

export interface setUser{
    type:typeof UserActionsTypes.SET_USER,
    payload:any
}

export interface UserReducer {
    currentUser:{},
    isAuth:boolean
}