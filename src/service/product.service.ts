import axios from "axios";
import { Articulo, ArticuloDetalle } from "../models/Articulo";

class ProductService {
    constructor(){}

    async getAllProduct() : Promise<Articulo[]>{
        return (await axios.get<Articulo[]>('http://localhost:8080/articulos')).data 
    }

    async getProduct(id : number) : Promise<ArticuloDetalle>{
        const res = await axios.get<ArticuloDetalle>(`http://localhost:8080/articulos/${id}`)
        const item = res.data
        return item
    }
}

export const productService = new ProductService()