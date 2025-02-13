export interface IColor {
    id: number;
    nombre: string;
    hex_value: string;
}

export interface ICategorias {
    id: number
    nombre: string
}

export class IDimension {
    alto_mm: number
    ancho_mm: number
    profundidad_mm: number

    constructor(alto_mm: number, ancho_mm: number, profundidad_mm: number) {
        this.alto_mm = alto_mm
        this.ancho_mm = ancho_mm
        this.profundidad_mm = profundidad_mm
    }
}

