import { NavLink, useNavigate } from 'react-router-dom'
import './login.css'
import { FormEvent, useState } from 'react'
import { loginService } from '../../service/login.service'
import { User } from '../../models/User'
import { useDispatch, useSelector } from 'react-redux'
import { updateUser } from '../../redux/states/user'
import { RootState } from '../../redux/store'

export const Login = () => {

    const [isValid, setIsValid] = useState<boolean | null>(null)
    const [user, setUser] = useState({Id:1, username: '', password: ''} as User)
    const userState = useSelector((store: RootState) => store.user)
    const dispatcher =  useDispatch()
    const navigate = useNavigate()
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { 
        e.preventDefault()
        try{
            const data = await loginService.identityValidation(user)
            setIsValid(data.data)
            dispatcher(updateUser(data.data))
            navHome()
        }
        catch(error: unknown){
            console.log(error) //TRABAJAR MUCHO MUCHO ESTO
        }
    }

    const navHome = () => {
        console.log('en la fun nav ', userState)
        if(userState.estado){ navigate("/home");}
    }

    const logout = () => {
        setIsValid(false)
        dispatcher(updateUser(false))
    }

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
                        {(userState.estado === 'false' || userState.estado === false) && <button type='submit' className="login-button">
                            Entrar
                        </button> }
                    </form>
                    {!(userState.estado === 'false' || userState.estado === false) && <button type='button' className="login-button" onClick={logout}>
                            Salir
                        </button>}
                    <NavLink to='/home'>
                        <button className="login-button-volver">
                            Volver
                        </button>
                    </NavLink>
                    {(!isValid && isValid != null) && <span className='notificacion-credeciales'>Credenciales invalidas</span>}
                </div>
            </div>
        </>
    )
}
