import { IColor } from "./Color"

export type ArticuloInterface = {
    id: number
    categorias: Array<string>
    colores: Array<IColor>
    titulo: string
    detalle: string
    imagen_1: string
    imagen_2: string
    imagen_3: string
    imagen_4: string
    imagen_5: string
    precio_lista: number
    descuento: number
    dimension_mm: string //Pensar si es una array de number
    disponible: boolean
}

export class Articulo {

    id: number
    categorias: Array<string>
    colores: Array<IColor>
    titulo: string
    detalle: string
    imagen_1: string
    imagen_2: string
    imagen_3: string
    imagen_4: string
    imagen_5: string
    precio_lista: number
    descuento: number
    dimension_mm: string //Pensar si es una array de number
    disponible: boolean

    constructor(
        id: number, 
        categorias: Array<string>, 
        colores: Array<IColor>, 
        titulo: string, 
        detalle: string, 
        imagen_1: string,
        imagen_2: string,
        imagen_3: string,
        imagen_4: string,
        imagen_5: string,
        precio_lista: number,
        descuento: number,
        dimension_mm: string,
        disponible: boolean){
        this.id = id
        this.categorias = categorias
        this.colores = colores
        this.titulo = titulo
        this.detalle = detalle
        this.imagen_1 = imagen_1
        this.imagen_2 = imagen_2
        this.imagen_3 = imagen_3
        this.imagen_4 = imagen_4
        this.imagen_5 = imagen_5
        this.precio_lista = precio_lista
        this.descuento = descuento
        this.dimension_mm = dimension_mm
        this.disponible = disponible
    }
}