import axios from "axios"
import { CategoriaType } from "../models/Categoria"


class CategoriaService {
    constructor(){}

    async getCategoriaNav(){
        return (await axios.get<CategoriaType[]>('http://localhost:8080/categorias_nav')).data
    }

}

export const categoriaService = new CategoriaService()