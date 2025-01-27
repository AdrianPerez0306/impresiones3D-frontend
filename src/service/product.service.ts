import axios from "axios";
import { Articulo } from "../models/Articulo"

class ProductService {
    constructor(){}

    async getAllProduct(){
        return (await axios.get<Articulo[]>('http://localhost:8080/articulos')).data
    }

    async getProduct(id : number){
        return (await axios.get<Articulo>(`http://localhost:8080/articulos/${id}`)).data
    }
}

export const productService = new ProductService()