import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/button/button";
import { Carrusel } from "../../components/carrusel/carrusel";
import { useToast } from "../../hooks/useToast";
import { getProductById } from "../../service/product.service";
import "./productDetail.css";
import { CartProduct, ProductDetailType } from "../../models/product";
import { useCart } from "../../hooks/useCart";
import { Color } from "../../models/color";
import { Dimension_mm } from "../../models/dimension_mm";
import { ProductInfo } from "../../components/productInfo/productInfo";

export const ProductDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductDetailType | null>(null);
    const colorProducto = useRef<Color | undefined>(undefined);
    const dimensionProducto = useRef<Dimension_mm | undefined>(undefined);
    const [loading, setLoading] = useState<boolean>(true);
    const { items, add } = useCart();
    const toast = useToast();

    const navigate = useNavigate();

    function _fromProductDetailToCartProduct(productDetail: ProductDetailType):CartProduct{

        return {
            id: productDetail.id,
            titulo: productDetail.titulo,
            imagen_1: productDetail.imagen_1,
            precio_lista: productDetail.precio_lista,
            orderDetails: [{
                ammount: 1,
                dimmension_mm: _fromStringToDimensionMM(_getCartProductHtmlElement('medida').value),
                color: _fromHtmlDataIdToColor(_getCartProductHtmlElement('color').dataset.id!)
            }]
        }
    }

    function _getCartProductHtmlElement(inputHtmlName:string):HTMLInputElement{
        const element = document.querySelector(`input[name="${inputHtmlName}"]:checked`) as HTMLInputElement
        return (
            document.querySelector(`input[name="${inputHtmlName}"]:checked`) as HTMLInputElement
        );
    }

    function _fromHtmlDataIdToColor(htmlElementDataId:string):Color{
        return product?.colores.find((color)=>color.id == Number(htmlElementDataId))!
    }

    function _fromStringToDimensionMM(string:string):Dimension_mm{
        // ////////////////////////////////////////////////////////
        //  El string llega de la forma AxBxC, se hace slice con X
        // ////////////////////////////////////////////////////////
        const dimensionSubstring: string[] = string.split('x')
        return {
            alto_mm: Number(dimensionSubstring[0]),
            ancho_mm: Number(dimensionSubstring[1]),
            profundidad_mm: Number(dimensionSubstring[2]),
        }
    }

    function addToCart(product: ProductDetailType){
        add([_fromProductDetailToCartProduct(product)]);
        toast.open("Producto agregado al carrito", "success")
    }
    
    const fetchData = async () => {
        try {

            const _productDetails = await getProductById(Number(id));
            setProduct(_productDetails);
            setLoading(false)
        } catch (error) {
            console.error("No se pudo obtener el producto:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [id]);

    return (
        <>
            {loading && (
                <div>Cargando...</div>
            )}
            {product && (
                <div className="contenedorInfoProducto">
                    <Carrusel imagenes={product.imagenes} />
                    <ProductInfo product={product} />
                    <div className="guardarCancelar">
                        <Button color="red" onClick={() => navigate("/home")}>Volver</Button>
                        <Button color="green" onClick={()=>(addToCart(product))}>Comprar</Button>
                    </div>
                </div>
            )}
        </>
    );
};
