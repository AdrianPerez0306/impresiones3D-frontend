import axios from "axios";
import { User } from "../models/User";

class LoginService {
    constructor(){}

    async identityValidation(user: User){
        return await axios.put<boolean>('http://localhost:8080/login', user)
    }

    async logout(){
        return await axios.get<boolean>('http://localhost:8080/logout')
    }
}

export const loginService = new LoginService()