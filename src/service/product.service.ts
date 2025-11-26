import axios, { AxiosResponse } from "axios";
import { ProductCardHome, ProductDetailType } from "../models/product";

export async function getProductById(id: number): Promise<ProductDetailType> {
    const res = await axios.get(`http://localhost:8080/articulos/${id}`);
    const productDetail = res.data;

    return {
        id: productDetail.id,
        titulo: productDetail.titulo,
        imagen: productDetail.imagen_1,
        precio_lista: productDetail.precio_lista,
        detalle: productDetail.detalle,
        categorias: productDetail.categorias,
        colores: productDetail.colores,
        imagenes: productDetail.imagenes,
        dimensiones_mm: productDetail.dimensiones_mm
    }

}

export async function getAll(): Promise<ProductCardHome[]> {
    return (await axios.get<ProductCardHome[]>('http://localhost:8080/articulos')).data;
}

export async function getProductsByFilter(filterValue: string): Promise<ProductCardHome[]> {
    const promise: Promise<AxiosResponse<ProductCardHome[], any>> = axios.get('http://localhost:8080/articulos/filter', { params: { filter: filterValue } })
    const products = (await promise).data
    return products
}

export async function getProductsByCategory(category: string): Promise<ProductCardHome[]> {
    const promise: Promise<AxiosResponse<ProductCardHome[], any>> = axios.get(`http://localhost:8080/articulos/categoria?categoria=${category}`)
    const products = (await promise).data
    console.log(products)
    return products
}


export async function getProductsByTitleFilter(filter: string): Promise<ProductCardHome[]> {
    const promise: Promise<AxiosResponse<ProductCardHome[], any>> = axios.get(`http://localhost:8080/articulos/filter?filter=${filter}`)
    const products = (await promise).data
    console.log()
    return products
}
