import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Articulo } from "../../models/Articulo";
import { addToCart } from "../../redux/states/cart";
import { productService } from "../../service/product.service";
import { Carrusel } from "../../components/carrusel/carrusel";

export const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState<Articulo | null>(null);
   
    const navigate = useNavigate();
    const dispatch = useDispatch();

  

    const agregarAlChango = () => {
        if (product) {
            // Convierte a un objeto serializable
            const itemSerializable = {
                titulo: product.titulo,
                imagen: product.imagen_1,
                precio_lista: product.precio_lista,
                color: product.colores[0].nombre,
                dimension_mm: product.dimension_mm,
                cantidad : 1

            };
            
            dispatch(addToCart(itemSerializable));  // Pasa el objeto serializado
            navigate("/home");
        } else {
            console.error("No se pudo añadir el artículo al carrito: ArticuloUser es undefined");
        }
    };
    

    const fetchData = async () => {
        try {
            const res = await productService.getProduct(Number(id));
            setProduct(res);
        } catch (error) {
            console.error("No se pudo obtener el producto:", error);
        }
    };
    useEffect(() => {
        fetchData();
    }, []);

    

    return (
        <>
            {product && (
                <Carrusel articulo={product} agregarAlChango={agregarAlChango} />
            )}

        </>
    );
};
