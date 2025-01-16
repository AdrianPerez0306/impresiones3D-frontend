
// si bien en un pricipio son identicos y no vale la pena tener 2 interfaces iguales
// no se realmente como lo vamos a manejar, tal vez mandamos menos infor y recibimos mas...

export interface User {
    Id:1,
    username: string,
    password: string
}

export interface UserJSON {
    Id:1,
    username: string,
    password: string
}