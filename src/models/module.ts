export const aboutMe = `
Acerca de mi, me llamo valentin, soy diseñador
industrial especialista en el sector automotor
y transportista.
Elaboro productos regidos por el diseño
aleman como bauhaus, Werkbound y ulm.
Vanguardismo, innovacion y pulcritud son
principios de esta marca para la elaboracion
de nuestros productos` 

export interface InterfaceProduct {
    id:number,
    title:string,
    img:string,
    info:string,
    price:number
}

const product_1:InterfaceProduct = {
    'id': 1,
    'title':'TRI - legde',
    'img':'productoA.png',
    'info':'Soporte para telefono',
    'price': 100
}

const product_2:InterfaceProduct = {
    'id': 2,
    'title':'Producto B',
    'img':'productoA.png',
    'info':'Palanca media mecanica',
    'price': 2325
}

const product_3:InterfaceProduct = {
    'id': 3,
    'title':'Producto C',
    'img':'productoA.png',
    'info':'Palanca no tan mecanica',
    'price': 5000
}

export const products = [product_1, product_2, product_3]
