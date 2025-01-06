import { aboutMe } from '../../models/module';
import './quienSoy.css'
export const QuienSoy = () => {

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


