import { useSelector } from 'react-redux';
import { aboutMe } from '../../models/module';
import { RootState } from '../../redux/store';
import './quienSoy.css'
import { useEffect } from 'react';
export const QuienSoy = () => {

    //PARA BORRAR!!
    const userState = useSelector((store: RootState) => store.user)

    useEffect(() => {
        console.log('seteo valor del user')
        console.log(userState)
    },[])
    //FIN BORRAR

    return <>

        
        <div className="aboutMe">
            <div className="contenedor">

                <div className='contenido'>

                    <div className='imagen'>
                        <img src="./src/assets/valen.png" alt="" />
                    </div>
                    <div className='texto'>
                        <p>{aboutMe}</p>
                    </div>
                </div>
            </div>
        </div>




    </>
};


