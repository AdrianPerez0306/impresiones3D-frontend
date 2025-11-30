import { useEffect, useState } from "react";
import "./carrusel.css";


interface CarruselProps {
    imagenes: Array<string>;
}

export const Carrusel = ( {imagenes} : CarruselProps ) => {
    
    const [imagenesList, setImagenesList] = useState<string[]>([]);
    const [imagenView, setImagenView] = useState<string | null>(null);
    const [indexImage, setIndexImage] = useState<number>(0);
    const [fade, setFade] = useState(false);
    


    const cargarInfoArticulo = () => {
        setImagenesList(imagenes);
        setImagenView(imagenes[0]);
    };

    const selectNewImagen = (index: number, images: string[], next = true) => {
        setFade(true);
        setTimeout(() => {
            const condition = next ? index < images.length - 1 : index > 0;
            const nextIndex = next ? (condition ? index + 1 : 0) : (condition ? index - 1 : images.length - 1);
            setIndexImage(nextIndex);
            setImagenView(images[nextIndex]);
            setFade(false);
        }, 300);
    };

    const previousImage = () => selectNewImagen(indexImage, imagenesList, false);
    const nextImage = () => selectNewImagen(indexImage, imagenesList, true);



    useEffect(() => {
        cargarInfoArticulo();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setFade(true);
            setTimeout(() => {
                const newIndex = (indexImage + 1) % imagenesList.length;
                setIndexImage(newIndex);
                setImagenView(imagenesList[newIndex]);
                setFade(false);
            }, 300);
        }, 3000);

        return () => clearInterval(interval);
    }, [imagenesList, indexImage]);


    return (
        <>
            <div className="carrusel">
                <div className="container__images">
                    {imagenView && (
                        <img className={`image ${fade ? "fade-out" : ""}`} src={`/public/assets/${imagenView}`} alt="Producto" />
                        
                    )}
                </div>

                <div className="controlers">
                    <button onClick={previousImage} className="anterior">{'<'}</button>
                    <button onClick={nextImage} className="siguiente">{'>'}</button>
                </div>

               
            </div>
        </>
    );
};