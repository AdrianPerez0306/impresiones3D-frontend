import { NavLink } from 'react-router-dom'
import './login.css'
import { FormEvent, useState } from 'react'
import { loginService } from '../../service/login.service'
import { User } from '../../models/User'
import { useDispatch } from 'react-redux'
import { updateUser } from '../../redux/states/user'

export const Login = () => {

    // let isValid = true
    const [isValid, setIsValid] = useState(true)
    const [user, setUser] = useState({Id:1, username: '', password: ''} as User)
    const dispatcher =  useDispatch()

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault()
        try{
            const data = await loginService.identityValidation(user)
            setIsValid(data.data)
            dispatcher(updateUser(data.data))
        }
        catch(error: unknown){
            console.log(error) //TRABAJAR MUCHO MUCHO ESTO
        }
    }

    // const checkValueUser = () => {
    //     return user.username === mockCredential.username && user.password === mockCredential.password
    // }

    return(
        <>
            <div className="login-container">
                <div className="login-card">
                    <h2>Iniciar Sesión</h2>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="form-group">
                            <label htmlFor="username">Usuario</label>
                            <input 
                            type="text" 
                            id="username" 
                            placeholder="Ingresa tu usuario" 
                            value={user.username} 
                            onChange={(ev) => setUser({...user, username: ev.target.value})}
                            required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="passwordword">Contraseña</label>
                            <input
                            type="passwordword"
                            id="passwordword"
                            placeholder="Ingresa tu contraseña"
                            value={user.password}
                            onChange={(ev) => setUser({...user, password : ev.target.value})}
                            required/>
                        </div>
                        <button type='submit' className="login-button">
                            Entrar
                        </button>
                    </form>
                    <NavLink to='/home'>
                        <button className="login-button-volver">
                            Volver
                        </button>
                    </NavLink>
                    {!isValid && <span>Credenciales invalidas</span>}
                </div>
            </div>
        </>
    )
}
