import axios from "axios"
import { CategoriaType } from "../models/category"


export async function getCategoriaNav() {
    return (await axios.get<CategoriaType[]>('http://localhost:8080/categorias/disponibles')).data
}