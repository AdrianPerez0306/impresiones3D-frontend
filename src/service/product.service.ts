import axios from "axios";
import { Articulo } from "../models/Articulo";

class ProductService {
    constructor(){}

    async getAllProduct() : Promise<Articulo[]>{
        return (await axios.get<Articulo[]>('http://localhost:8080/articulos')).data 
    }

    async getProduct(id : number) : Promise<Articulo>{
        return (await axios.get<Articulo>(`http://localhost:8080/articulos/${id}`)).data
    }
}

export const productService = new ProductService()