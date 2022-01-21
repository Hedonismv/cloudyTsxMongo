
import axios from "axios";



export const registration:Function = async (email:string, password:string) => {
    try{
        const response = await axios.post('/api/auth/registration', {
            email,
            password
        })
    } catch (e) {
        console.log(e)
    }
}


export const login:Function = (email:string, password:string) => {
    // @ts-ignore
    return async dispatch => {
        try{
            const response = await axios.post('/api/auth/login', {
                email,
                password
            })
            console.log(response.data)
        }catch (e) {
            console.log(e)
        }
    }
}