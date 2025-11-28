import { creator } from '../../models/constants';
import './quienSoy.css';

export const QuienSoy = () => {



    return <>
        <div className="container__aboutMe">

            <div className="container__designs">
                <h1>Diseños</h1>
                <div className="designs__types container__cards">
                    <div className="design design__bauhaus card">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-primary-bright)"><path d="m791-55-91-91q-49 32-104.5 49T480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-60 17-115.5T146-700l-91-91 57-57 736 736-57 57ZM480-160q43 0 83.5-11t78.5-33L204-642q-22 38-33 78.5T160-480q0 133 93.5 226.5T480-160Zm334-100-58-58q22-38 33-78.5t11-83.5q0-133-93.5-226.5T480-800q-43 0-83.5 11T318-756l-58-58q49-32 104.5-49T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 60-17 115.5T814-260ZM537-537ZM423-423Z" /></svg>
                        <h2>Bauhaus</h2>
                        <p className="text-md">Formas simples, geométricas y funcionales. Menos es más.</p>
                    </div>
                    <div className="design__werkbound design card">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-primary-bright)"><path d="M272-120 64-480l208-360h416l208 360-208 360H272Zm46-80h224l161-280-161-280H318L156-480l162 280Zm162-280Z" /></svg>
                        <h2>Werkbound</h2>
                        <p className="text-md">Calidad y precisión en cada pieza. Unión perfecta entre arte y técnica.</p>
                    </div>
                    <div className="design__uml design card">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-primary-bright)"><path d="M720-140 560-300l160-160 56 56-63 64h167v80H713l63 64-56 56Zm-560-20q-33 0-56.5-23.5T80-240v-120q0-33 23.5-56.5T160-440h240q33 0 56.5 23.5T480-360v120q0 33-23.5 56.5T400-160H160Zm0-80h240v-120H160v120Zm80-260-56-56 63-64H80v-80h167l-63-64 56-56 160 160-160 160Zm320-20q-33 0-56.5-23.5T480-600v-120q0-33 23.5-56.5T560-800h240q33 0 56.5 23.5T880-720v120q0 33-23.5 56.5T800-520H560Zm0-80h240v-120H560v120ZM400-240v-120 120Zm160-360v-120 120Z" /></svg>
                        <h2>UML</h2>
                        <p className="text-md">Diseño basado en la lógica y la estructura. Inteligente y sin adornos.</p>
                    </div>
                </div>

            </div>

            <div className="container__values">
                <h1>Diseños</h1>
                <div className="values__types container__cards">
                    <div className="value value__neatness card">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-primary-bright)"><path d="M480-120 80-600l120-240h560l120 240-400 480Zm-95-520h190l-60-120h-70l-60 120Zm55 347v-267H218l222 267Zm80 0 222-267H520v267Zm144-347h106l-60-120H604l60 120Zm-474 0h106l60-120H250l-60 120Z"/></svg>
                        <h2>Pulcridad</h2>
                        <p className="text-md">Texto texto texto texto texto texto texto</p>
                    </div>
                    <div className="value value__innovation card">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-primary-bright)"><path d="M480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM320-200v-80h220v80H320Zm10-120q-69-41-109.5-110T180-580q0-125 87.5-212.5T480-880q125 0 212.5 87.5T780-580q0 81-40.5 150T630-320H330Zm24-80h252q45-32 69.5-79T700-580q0-92-64-156t-156-64q-92 0-156 64t-64 156q0 54 24.5 101t69.5 79Zm126 0Z"/></svg>
                        <h2>Innovacion</h2>
                        <p className="text-md">Texto texto texto texto texto texto texto</p>
                    </div>
                    <div className="value value__vanguard card">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="var(--color-primary-bright)"><path d="m40-120 440-760 440 760H40Zm139-80h602L480-720 179-200Zm261-40h80v-80h80v-80h-80v-80h-80v80h-80v80h80v80Zm40-120Z"/></svg>
                        <h2>Vanguardia</h2>
                        <p className="text-md">Texto texto texto texto texto texto texto</p>
                    </div>
                </div>

            </div>

            <div className="container__me">

                <div className='me__imagen'>
                    <img src="" alt="FOTO" defaultValue={'foto'}/>
                </div>

                <div className='me__name me'>
                    <h1>{creator.name}</h1>
                </div>

                <div className='me__occupation me'>
                    <h2>{creator.occupation}</h2>
                    <h3>{creator.specialization}</h3>
                </div>


            </div>

        </div>
    </>
};


