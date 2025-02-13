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
        return new ArticuloDetalle(item.id, item.titulo, item.detalle, item.precio_lista, item.descuento, item.categorias, item.colores, item.dimensiones_mm, item.imagenes)
    }
}

export const productService = new ProductService()

