import "./productInfo.css";
import { ProductDetailType } from "../../models/product";

export const ProductInfo = ({ product }: { product: ProductDetailType }) => {
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
                        {product?.colores.sort((a, b) => a.id - b.id).map((color, index) => (
                            <label className="label" key={color.id}>
                                <input
                                    id="color"
                                    className="input"
                                    type="radio"
                                    name="color"
                                    value={color.nombre}
                                    defaultChecked={product.colores[0].id === color.id}
                                    data-id={color.id}
                                />
                                <span >{color.nombre}</span>
                            </label>
                        ))}
                    </div>
                </div>
                <div className="boxInputs">
                    <p>Selecciona tamaño</p>
                    <div className="medidas">
                        {product?.dimensiones_mm.sort((a, b) =>
                            (a.alto_mm * a.ancho_mm * a.profundidad_mm) -
                            (b.alto_mm * b.ancho_mm * b.profundidad_mm)
                        ).map((medida, index) => (
                            <label className="label" key={index}>
                                <input
                                    id="medida"
                                    className="input"
                                    type="radio"
                                    name="medida"
                                    defaultChecked={index === 0}
                                    value={`${medida.alto_mm}x${medida.ancho_mm}x${medida.profundidad_mm}`}
                                />
                                <span>{`${medida.alto_mm}x${medida.ancho_mm}x${medida.profundidad_mm}`}</span>
                            </label>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
