import axios from "axios"
import { CategoriaType } from "../models/category"
import { SERVER_CONNECTION } from "./constants"


export async function getCategoriaNav() {
    return (await axios.get<CategoriaType[]>(`${SERVER_CONNECTION}/categorias/disponibles`)).data
}