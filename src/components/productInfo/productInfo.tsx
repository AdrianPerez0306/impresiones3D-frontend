import "./productInfo.css";
import { ProductDetailType } from "../../models/product";

export const ProductInfo = ({ product }: { product: ProductDetailType }) => {
    return (
        <>
            <div className="product__info">

                <div className="product__title">
                    <h2 className="text-xxl">{product?.titulo}</h2>
                </div>

                <div className="product__price">
                    <p className="text-xl">${product?.precio_lista}</p>
                </div>

                <div className="product__description data__box">
                    <h5 className="text-lg">Descripción</h5>
                    <p className="text-base">{product?.detalle}</p>
                </div>

                <div className="product__options data__box">
                    <h5 className="text-lg">Selecciona un color</h5>
                    <div className="colores">
                        {product?.colores.sort((a, b) => a.id - b.id).map((color, index) => (
                            <label className="" key={color.id}>
                                <input
                                    id="color"
                                    className="input"
                                    type="radio"
                                    name="color"
                                    style={{accentColor: `#${color.hexValue}`}}
                                    value={color.nombre}
                                    defaultChecked={product.colores[0].id === color.id}
                                    data-product-id={color.id}
                                />
                                <span className=''>{color.nombre[0].toUpperCase() + color.nombre.slice(1)}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="product__options data__box">
                    <h5 className="text-lg">Selecciona tamaño</h5>
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
