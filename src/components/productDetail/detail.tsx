import { useEffect, useState } from "react";
import { ArticuloDetalle } from "../../models/Articulo";
import { useNavigate } from "react-router-dom";
import { IColor } from "../../models/Color";
import ButtonRed from "../buttonRed/buttonRed";
import ButtonGreen from "../buttonGreen/buttonGreen";
import "./detail.css";

interface IArticuloDetalle {
    articulo: ArticuloDetalle;
    agregar: () => void;
}

export const ProductInfo = ({ articulo, agregar }: IArticuloDetalle) => {
    const [product, setProduct] = useState<ArticuloDetalle | null>(null);
    const [coloresList, setColoresList] = useState<IColor[]>([]);
    const [colorChecked, setColorChecked] = useState<string>("");
    const [medidas, setMedidas] = useState<string[]>([]);
    const [medidaChecked, setMedidaChecked] = useState<string>("");
    const navigate = useNavigate();

    const confirmar = () => {
        agregar();
    };

    const cargarInfoArticulo = () => {
        setProduct(articulo);
        setColoresList(articulo.colores);
        setMedidas(articulo.dimensiones_mm);
        setColorChecked(articulo.colores[0].nombre);
        setMedidaChecked(articulo.dimensiones_mm[0]);
    };

    const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setColorChecked(event.target.value);
    };

    const handleMedidaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMedidaChecked(event.target.value);
    };

    useEffect(() => {
        cargarInfoArticulo();
    }, []);

    return (
        <>
            <div className="infoProducto">
                <div className="data">
                    <h5>Nombre del articulo</h5>
                    <p>{product?.titulo}</p>
                </div>
                <div className="data">
                    <h5>Precio</h5>
                    <p>${product?.precio_lista}</p>
                </div>
                <div className="data">
                    <h5>Descripción</h5>
                    <p>{product?.detalle}</p>
                </div>

                <div className="colores">
                    <h5>Selecciona un color</h5>
                    {coloresList.map((color) => (
                        <label className="label" key={color.id}>
                            <input
                                className="input"
                                type="radio"
                                name="color"
                                value={color.nombre}
                                checked={colorChecked === color.nombre}
                                onChange={handleColorChange}
                            />
                            <span>{color.nombre}</span>
                        </label>
                    ))}
                </div>

                <div className="medidas">
                    <p>Selecciona tamaño</p>
                    {medidas.map((medida, index) => (
                        <label className="label" key={index}>
                            <input
                                className="input"
                                type="radio"
                                name="medida"
                                value={medida}
                                checked={medidaChecked === medida}
                                onChange={handleMedidaChange}
                            />
                            <span>{medida}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="guardarCancelar">
                <ButtonRed label="Volver" onClick={() => navigate("/home")} />
                <ButtonGreen label="Añadir" onClick={confirmar} />
            </div>
        </>
    );
};
