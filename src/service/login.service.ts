import axios from "axios";
import { User } from "../models/User";

class LoginService {
    constructor(){}

    async identityValidation(user: User){
        return await axios.put<boolean>('http://localhost:8080/login', user)
    }
}

export const loginService = new LoginService()