import { CartItemForMailService } from "./product";


export type MailType = {
    to: string;
    cartItems: CartItemForMailService[];
    total: number;
}