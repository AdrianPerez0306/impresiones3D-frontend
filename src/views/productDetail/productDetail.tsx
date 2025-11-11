import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ButtonGreen from "../../components/buttonGreen/buttonGreen";
import ButtonRed from "../../components/buttonRed/buttonRed";
import { Carrusel } from "../../components/carrusel/carrusel";
import { ProductInfo } from "../../components/productDetail/detail";
import { useToast } from "../../hooks/useToast";
import { ArticuloDetalle } from "../../models/Articulo";
import { addToCart } from "../../redux/states/cart";
import { productService } from "../../service/product.service";
import "./productDetail.css";

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ArticuloDetalle | null>(null);
    const [colorProducto, setColorProducto] = useState<string>("");
    const [dimensionProducto, setdimensionProducto] = useState<string>("");

    const toast = useToast();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const agregarAlChango = () => {
        if (product) {
            console.log("dimensiones ", product.dimensiones_mm);
            // Convierte a un objeto serializable
            const itemSerializable = {
                titulo: product.titulo,
                imagen: product.imagenes[0],
                precio_lista: product.precio_lista,
                color: colorProducto,
                dimension_mm: dimensionProducto,
                cantidad: 1
            };
            console.log("Articulo serializable:", itemSerializable);

            toast.open("Artículo añadido al carrito", "success");
            setTimeout(() => {
                dispatch(addToCart(itemSerializable));  
                navigate("/home");
            }, 1000);
        } else {
            console.error("No se pudo añadir el artículo al carrito: product es null");
        }
    };

    const cambiarAtributo = (valor: string, esColor: boolean) => {
        if (esColor) {
            setColorProducto(valor);
        } else {
            setdimensionProducto(valor);
        }
    }

    const fetchData = async () => {
        try {
            const res = await productService.getProduct(Number(id));
            setProduct(res);
            setColorProducto(res.colores[0].nombre);
            setdimensionProducto(res.dimensiones_mm[0]);
            console.log("Producto obtenido:", res);
        } catch (error) {
            console.error("No se pudo obtener el producto:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <>
            {product && (
                <div className="contenedorInfoProducto">
                    <Carrusel imagenes={product.imagenes} />
                    <ProductInfo articulo={product} modificar={cambiarAtributo} />
                    <div className="guardarCancelar">
                        <ButtonRed label="Volver" onClick={() => navigate("/home")} />
                        <ButtonGreen label="Añadir" onClick={agregarAlChango} />
                    </div>
                </div>
            )}
        </>
    );
};
