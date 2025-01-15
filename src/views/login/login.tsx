import { NavLink } from 'react-router-dom'
import './login.css'
import { FormEvent, useState } from 'react'
import { loginService } from '../../service/login.service'

interface Credential {userName : string, pass: string}
const mockCredential: Credential = {userName: 'admin', pass: 'mandarina'}

export const Login = () => {

    // let isValid = true
    const [isValid, setIsValid] = useState(true)
    const [user, setUser] = useState({userName: '', pass: ''})

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => { //Hay que pasarle el e FromEvent saraza si no no lanzo warning
        e.preventDefault() // Evita el refresco de la página porque me molesta
        setIsValid(checkValueUser())
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




// import { useContext, useState } from 'react'
// import { Stack, TextField, Button, IconButton, InputAdornment, Typography} from '@mui/material'
// import { Visibility, VisibilityOff } from '@mui/icons-material'
// import fondo from "../../../src/assets/loginFondo.png"
// import { loginService } from "../../services/loginService"
// import { AxiosError } from "axios"
// import { sessionContext } from "../root/Root"
// import { SubmitHandler, useForm } from 'react-hook-form'

// interface LoginFormInputs{
//     email: string
//     password: string
// }

// export default function LoginScreen() {
//     /* REACT HOOK FORM */
//     const [ user, setUser ] = useContext( sessionContext )
//     const [showPassword, setShowPassword] = useState(false)
//     const { register, handleSubmit, formState: {errors}} = useForm<LoginFormInputs>()
//     const [globalError, setGlobalError] = useState<string | null>(null)
//     const handleClickShowPassword = () => setShowPassword(!showPassword)
    

//     const handleLogin: SubmitHandler<LoginFormInputs> = async (data) => {
//         setGlobalError(null)
//         try {
//             const res = await loginService.login( data.email, data.password )
//             setUser( res.user )
//             localStorage.setItem('user', JSON.stringify(res.user))
//         } catch ( error: unknown ){
//             console.error( error )
//             if( (error as AxiosError).status === 403 ) {
//             setGlobalError("Credenciales Invalidas.")            
//         }
//             if((error as AxiosError).code === "ERR_NETWORK"){
//                 setGlobalError("Error de Conexión.")            
//             }
//         }        
//     }

//     return (
//     <Stack
//         spacing={10}
//         alignItems="center"
//         justifyContent="center"
//         sx={{
//             height: '100vh',
//             backgroundImage: `url(${fondo})`,
//             backgroundSize: 'cover',
//             backgroundPosition:'center'  
//     }}
//     >
//         <h1
//             style={{
//                 fontSize: "4rem" 
//             }}
//         >ReadApp</h1>
//         <form onSubmit={handleSubmit(handleLogin)}>
//         <Stack 
//             style={{
//                 width: "20rem",
//                 display: 'flex', 
//                 flexDirection: 'column',
//                 gap: '50px' 
//             }}
//         >
//             <TextField
//                 label="Usuario" 
//                 variant="outlined" 
//                 {...register("email", 
//                     {   required: "El usuario es obligatorio.",
//                         pattern: {
//                             value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
//                             message: "Debe tener formato de correo electrónico."
//                         }
//                     })}
//                 error={!!errors.email}
//                 helperText={errors.email?.message}
//                 sx={{
//                      '& .MuiOutlinedInput-root': {
//                         '&.Mui-focused fieldset': {
//                             borderColor: 'rgb(242, 93, 11)'
//                         },
//                      },
//                      '& .MuiInputLabel-root.Mui-focused': {
//                         color: 'black'
//                     },
//                 }}
//             />

//             <TextField
//                 label="Contraseña" 
//                 variant="outlined" 
//                 type={showPassword ? "text" : "password"}
//                 {...register("password", { required: "La contraseña es obligatoria." , minLength: {value :5 , message: "La contraseña debe tener minimo 5 carcateres."}})}

//                     fullWidth
//                     error={!!errors.password}
//                     helperText={errors.password?.message}
//                     InputProps={{
//                         endAdornment: (
//                             <InputAdornment position="end">
//                                 <IconButton onClick={handleClickShowPassword} edge="end">
//                                     {showPassword ? <VisibilityOff /> : <Visibility />}
//                                 </IconButton>
//                             </InputAdornment>
//                         )
//                     }}
//                     sx={{
//                      '& .MuiOutlinedInput-root': {
//                         '&.Mui-focused fieldset': {
//                             borderColor: 'rgb(242, 93, 11)'
//                         },
//                      },
//                      '& .MuiInputLabel-root.Mui-focused': {
//                         color: 'black'
                        
//                     },
//                 }}
//             />       
//             <Button
//                 type="submit"
//                 variant="contained"   
//                 sx={{
//                         backgroundColor: 'rgb(242, 93, 11)', 
                        
//                     }}      
//             >Ingresar</Button>
//             {globalError?(
//                 <Typography
//                     variant="body2"
//                     color="error"
//                     style={{ textAlign: 'center', minHeight: '1.2rem' }} // Reservar espacio
//                     >
//                     {globalError}
//                 </Typography>
//                 ) : (
//                     <div style={{ minHeight: '1.2rem' }} /> 
//             )}            </Stack>
//             </form>
//     </Stack>
//     )
// }