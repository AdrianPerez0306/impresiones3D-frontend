import axios from "axios";
import { MailType } from "../models/mail";
import { CartItemForMailService } from "../models/product";
import { SERVER_CONNECTION } from "./constants";



export async function sendMail(to: string, cartItems: CartItemForMailService[], total: number): Promise<MailType> {
    const payload: MailType = { to, cartItems, total };
    return (await axios.post<MailType>(`${SERVER_CONNECTION}/send`, payload)).data;
}


export async function sendMailMock(_: string, __: CartItemForMailService[], ___: number): Promise<any> {
    return 1;
}

