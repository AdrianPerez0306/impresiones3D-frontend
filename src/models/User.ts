
// si bien en un pricipio son identicos y no vale la pena tener 2 interfaces iguales
// no se realmente como lo vamos a manejar, tal vez mandamos menos infor y recibimos mas...

export interface User {
    userName: string,
    pass: string
}

export interface UserJSON {
    userName: string,
    pass: string
}