import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ButtonGreen from "../../components/buttonGreen/buttonGreen";
import ButtonRed from "../../components/buttonRed/buttonRed";
import { ArticuloDetalle } from "../../models/Articulo";
import { IColor } from "../../models/Color";
import "./carrusel.css";

interface CarruselProps {
    articulo: ArticuloDetalle;
    agregarAlChango: () => void;
}

export const Carrusel = ({ articulo, agregarAlChango }: CarruselProps) => {
    const [product, setProduct] = useState<ArticuloDetalle | null>(null);
    const [coloresList, setColoresList] = useState<IColor[]>(articulo.colores);
    const [imagenesList, setImagenesList] = useState<string[]>([]);
    const [imagenView, setImagenView] = useState<string | null>(null);
    const [indexImage, setIndexImage] = useState<number>(0);
    const [fade, setFade] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setProduct(articulo);
        setColoresList(articulo.colores);
        setImagenesList(articulo.imagenes);
        setImagenView(articulo.imagenes[0]);

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

    return (
        <>
            <div className="containerDetalleProducto">
                <div className="img1">
                    {imagenView && (

                        <img className={`imagen1 ${fade ? "fade-out" : ""}`} src={imagenView} alt="Producto" />
                        
                    )}
                </div>

                <div className="controlers">
                    <button onClick={previousImage} className="anterior">{'<'}</button>
                    <button onClick={nextImage} className="siguiente">{'>'}</button>
                </div>

                <div className="descripcion">
                    <h5>Descripción</h5>
                    <p>{product?.detalle}</p>
                </div>

                <div className="colores">
                    <h4>Selecciona un color</h4>
                    <select name="selectColors" className="selectColor">
                        {coloresList.map((color, index) => (
                            <option key={index} value={color.nombre}>
                                {color.nombre}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="medidas">
                    <p>Selecciona tamaño</p>
                    <h5>checks de tamaños</h5>
                </div>
            </div>
            <div className="guardarCancelar">
                <ButtonRed label="Volver" onClick={() => navigate("/home")} />
                <ButtonGreen label="Añadir" onClick={agregarAlChango} />
            </div>
        </>
    );
};