import { ICategorias, IColor, IDimension } from "./Color"

export type ArticuloInterface = {
    id: number
    titulo: string
    precio_lista: number
    descuento: number
    imagen: string
}

export class Articulo implements ArticuloInterface {
    id: number
    titulo: string
    precio_lista: number
    descuento: number
    imagen: string

    constructor(
        id: number,
        titulo: string,
        precio_lista: number,
        descuento: number,
        imagen: string) {

        this.id = id
        this.titulo = titulo
        this.imagen = imagen
        this.precio_lista = precio_lista
        this.descuento = descuento
    }

}


export class ArticuloDetalle {
    id: number
    titulo: string
    detalle: string
    precio_lista: number
    descuento: number
    categorias: ICategorias
    colores: Array<IColor>
    dimension_mm: Array<IDimension>
    imagenes: Array<string>

    constructor(
        id: number,
        titulo: string,
        detalle: string,
        precio_lista: number,
        descuento: number,
        categorias: ICategorias,
        colores: Array<IColor>,
        dimension_mm: Array<IDimension>,
        imagenes: Array<string>) {

        this.id = id
        this.titulo = titulo
        this.detalle = detalle
        this.precio_lista = precio_lista
        this.descuento = descuento
        this.categorias = categorias
        this.colores = colores
        this.dimension_mm = dimension_mm
        this.imagenes = imagenes
    }


}