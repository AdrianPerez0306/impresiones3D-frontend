import axios from "axios";
import { User, UserJSON } from "../models/User";

class LoginService {
    constructor(){}

    async identityValidation(user: User){
        return await axios.post<UserJSON>('mock_URL', user)
    }
}

export const loginService = new LoginService()