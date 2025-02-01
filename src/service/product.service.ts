import axios from "axios";
import { Articulo, ArticuloInterface } from "../models/Articulo"

class ProductService {
    constructor(){}

    async getAllProduct() : Promise<ArticuloInterface[]>{
        return (await axios.get<Articulo[]>('http://localhost:8080/articulos')).data 
    }

    async getProduct(id : number) : Promise<ArticuloInterface>{
        return (await axios.get<Articulo>(`http://localhost:8080/articulos/${id}`)).data
    }
}

export const productService = new ProductService()