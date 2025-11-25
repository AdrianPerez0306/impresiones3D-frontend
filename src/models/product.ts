import { Color } from "./color";
import { Dimension_mm } from "./dimension_mm";


//  ########################################################
//  All products DTO shared structure
//  ########################################################
export type ProductBasicType = {
    id: number,
    titulo: string,
    imagen_1: string,
    precio_lista: number,
    descuento?: number
}
// class ProductBase {
//     constructor(
//         public id: number = 0,
//         public title: string = "",
//         public image_1: string = "",
//         public price: number = 0,
//         public discount: number = 0
//     ) { }
// }
//  ########################################################
//  ########################################################
//  ########################################################

//  ########################################################
//  PRODUCT HOME STRUCTURE
//  ########################################################
export type ProductCardHome = ProductBasicType & {
    colores: Array<Color>
}
// export class ProductCardHome extends ProductBase {
//     constructor(
//         public colors: Array<number> = [],
//         ...inheritedParams: ConstructorParameters<typeof ProductBase>
//     ) {
//         super(...inheritedParams);
//     }
// }
//  ########################################################
//  ########################################################
//  ########################################################


//  ########################################################
//  PRODUCT DETAIL STRUCTURE
//  ########################################################
export type ProductDetailType = ProductBasicType & {
    detalle: string,
    categorias: Array<string>,
    colores: Array<Color>,
    imagenes: Array<string>,
    dimensiones_mm: Array<Dimension_mm>,
};
// export class ProductDetail extends ProductBase {
//     constructor(
//         public detail: string = "",
//         public colors: Array<number> = [],
//         public categorys: Array<number> = [],
//         public imagenes: string[] = [],
//         public dimensions_mm: string = "",
//         ...inheritedParams: ConstructorParameters<typeof ProductBase>
//     ) {
//         super(...inheritedParams);
//     }
// }
// export function productDetailFromJSON(data: ProductDetailJSON): ProductDetail {
//     return Object.assign(new ProductDetail(), data);
// }
//  ########################################################
//  ########################################################
//  ########################################################

//  ########################################################
//  PRODUCT CART
//  ########################################################

export type CartProductAmmountByDimmensionAndColor ={
    ammount: number,
    dimmension_mm: Dimension_mm,
    color: Color
}
export type CartProduct = ProductBasicType & {
    orderDetails: CartProductAmmountByDimmensionAndColor[]
};
// export class ProductCart extends ProductBase {
//     constructor(
//         public detail: string = "",
//         public dimensions_mm: string = "",
//         ...inheritedParams: ConstructorParameters<typeof ProductBase>
//     ) {
//         super(...inheritedParams);
//     }
// }
// export function productCartFromJSON(data: ProductCardCartJSON): ProductCart {
//     return Object.assign(new ProductCart(), data);
// }
//  ########################################################
//  ########################################################
//  ########################################################