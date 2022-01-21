
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