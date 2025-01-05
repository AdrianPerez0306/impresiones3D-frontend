import { NavLink } from 'react-router-dom'
import './login.css'
import { FormEvent, useState } from 'react'
import { loginService } from '../../service/login.service'

interface Credential {userName : string, pass: string}
const mockCredential: Credential = {userName: 'admin', pass: 'mandarina'}

export const Login = () => {

    let isValid = true

    const [user, setUser] = useState({userName: '', pass: ''})

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { //Hay que pasarle el e FromEvent saraza si no no lanzo warning
        e.preventDefault(); // Evita el refresco de la página porque me molesta
        isValid = checkValueUser()
        const data = await loginService.identityValidation(user)
        //guardo la data... o simplemente veo en el back que los datos coincida y mando el OK de habilitado para finalmente guardar ese OK
    }

    const checkValueUser = () => {
        return user.userName === mockCredential.userName && user.pass === mockCredential.pass
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
                            value={user.userName} 
                            onChange={(ev) => setUser({...user, userName: ev.target.value})}
                            required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Contraseña</label>
                            <input
                            type="password"
                            id="password"
                            placeholder="Ingresa tu contraseña"
                            value={user.pass}
                            onChange={(ev) => setUser({...user, pass : ev.target.value})}
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