import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products, InterfaceProduct } from "../../models/module";
import "./productDetail.css";
import ButtonGreen from "../../components/buttonGreen/buttonGreen";
import ButtonRed from "../../components/buttonRed/buttonRed";
import { ArticuloInterface } from "../../models/Articulo";
import { productService } from "../../service/product.service";


export const ProductDetail = () => {
    const routeParameter = useParams()
    const [product, setProduct] = useState<ArticuloInterface>()
    const navigate = useNavigate()

    const getArticulo = async() => {
        const res = await productService.getProduct(Number(routeParameter.id))
        setProduct(res)
    }

    useEffect(() => {
        getArticulo();
    }, []);

    function agregarVolver(): () => void {
        return () => {
            console.log("Product added to cart");
            navigate(`/home`);
        };
    }

    function volverProductos(): () => void {
        return () => {
            navigate(`/home`);
        };
    }

    return <>
        <div className="containerDetalleProducto">
            <div className="img1">
                <img className="imagen1" src={product?.imagen_1} />
            </div>
            <div className="img2">
                <img className="imagen2" src={product?.imagen_2} />
            </div>
            <div className="img3">
                <img className="imagen3" src={product?.imagen_3} />
            </div>
            <div className="descripcion"><p>{product?.detalle}</p></div>
                <div className="colores">
                    <p>Selecciona un color</p>
                    <div className="ratios">
                    </div>
                </div>
            <div className="cantidad">
                <p>Cantidad</p>
                <div className="contador">
                    <button>+</button>
                    <p className="cantidadNumerica">1</p>
                    <button>-</button>
                </div>
            </div>
            </div>

        <div className="guardarCancelar">
            <div>
                <ButtonRed label="Volver" onClick={volverProductos()}></ButtonRed>
            </div>
            <div>
                <ButtonGreen label="Agregar y seguir comprando" onClick={agregarVolver()}></ButtonGreen>
            </div>
        </div>
    </>
};

