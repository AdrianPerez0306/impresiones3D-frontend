import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArticuloDetalle } from "../../models/Articulo";
import { IColor } from "../../models/Color";
import "./detail.css";

interface IArticuloDetalle {
    articulo: ArticuloDetalle;
    modificar: (valor: string, esColor: boolean) => void;
}

export const ProductInfo = ({ articulo, modificar }: IArticuloDetalle) => {
    const [product, setProduct] = useState<ArticuloDetalle | null>(null);
    
    const [coloresList, setColoresList] = useState<IColor[]>([]);
    const [colorChecked, setColorChecked] = useState<string>("");
    const [medidas, setMedidas] = useState<string[]>([]);
    const [medidaChecked, setMedidaChecked] = useState<string>("");


    const confirmar = (event: React.ChangeEvent<HTMLInputElement>, esColor: boolean) => {
        const valor = event.target.value;
        if (esColor) {
            setColorChecked(valor);
            modificar(valor, true);
        } else {
            setMedidaChecked(valor);
            modificar(valor, false);
        }
    };

    const cargarInfoArticulo = () => {
        setProduct(articulo);
        setColoresList(articulo.colores);
        setMedidas(articulo.dimensiones_mm);
        setColorChecked(articulo.colores[0].nombre);
        setMedidaChecked(articulo.dimensiones_mm[0]);
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

                <div className="boxInputs">
                    <h5>Selecciona un color</h5>
                    <div className="colores">
                        {coloresList.map((color) => (
                            <label className="label" key={color.id}>
                                <input
                                    className="input"
                                    type="radio"
                                    name="color"
                                    value={color.nombre}
                                    checked={colorChecked === color.nombre}
                                    onChange={(event) => confirmar(event, true)}
                                />
                                <span>{color.nombre}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="boxInputs">
                    <p>Selecciona tamaño</p>
                    <div className="medidas">
                        {medidas.map((medida, index) => (
                            <label className="label" key={index}>
                                <input
                                    className="input"
                                    type="radio"
                                    name="medida"
                                    value={medida}
                                    checked={medidaChecked === medida}
                                    onChange={(event) => confirmar(event, false)}
                                />
                                <span>{medida}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
