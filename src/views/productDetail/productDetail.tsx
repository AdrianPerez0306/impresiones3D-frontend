import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./productDetail.css";
import ButtonGreen from "../../components/buttonGreen/buttonGreen";
import ButtonRed from "../../components/buttonRed/buttonRed";
import { Articulo } from "../../models/Articulo";
import { productService } from "../../service/product.service";
import { IColor } from "../../models/Color";


export const ProductDetail = () => {
    const routeParameter = useParams()
    const [product, setProduct] = useState<Articulo>()
    const [coloresList, setColoresList] = useState<IColor[]>([])
    const [imagenesList, setImagenesList] = useState<string[]>([])
    const navigate = useNavigate()

    const fetchData = async () => {
        const res = await productService.getProduct(Number(routeParameter.id))
        setProduct(res)
        obtenerColores()
        obtenerImagenes()
    }

    const obtenerColores = () => {
        if (product?.colores) {
            setColoresList(product.colores);
        }
    };


    const obtenerImagenes = () => {
        if (product) {
            const img = [product.imagen_1, product.imagen_2, product.imagen_3, product.imagen_4, product.imagen_5];
            setImagenesList(img.filter((imagen) => imagen));
        }
    };

    useEffect(() => {
        fetchData()
        obtenerColores();
        obtenerImagenes();
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
            <div className="descripcion">
                <h5>Descripcion</h5>
                <p>{product?.detalle}</p>
            </div>
            <div className="colores">
                <h4>Selecciona un color</h4>
                <select name="selectColors" id="selectColors" >
                    {coloresList.map((color, index) => (
                        <option key={index} value={color.nombre}>
                            {color.nombre}
                        </option>
                    ))}
                </select>
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

