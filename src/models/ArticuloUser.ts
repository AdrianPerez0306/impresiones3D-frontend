export class ArticuloUser {
    titulo: string;
    imagen: string;
    precio_lista: number;
    color: string;
    dimension_mm: string;
    cantidad: number;
    constructor(titulo: string, imagen: string, precio_lista: number, color: string, dimension_mm: string, cantidad: number) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.precio_lista = precio_lista;
        this.color = color;
        this.dimension_mm = dimension_mm;
        this.cantidad = cantidad;
    }
}