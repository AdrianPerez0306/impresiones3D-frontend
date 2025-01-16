import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products, InterfaceProduct } from "../../models/module";
import "./productDetail.css";


export const ProductDetail = () => {
    const routeParameter = useParams()
    const [product, setProject] = useState<InterfaceProduct>()
    const navigate = useNavigate()

    function getProject(): void {
        // Como no hay backend solo lo busca en la lista de <modules.ts>
        const productAux = products.find(product =>
            product.id == Number(routeParameter.id)
        )
        setProject(productAux)
    }

    // function goBack(){
    //     navigate(`/home`)
    // }

    useEffect(() => {
        getProject();
    }, []);

    return <>

        <div className="containerDetalleProducto">
            <div className="img1">
                <img className="imagen1" src="../src/assets/productoA.png" />
            </div>
            <div className="img2">
                <img className="imagen2" src="../src/assets/productoA.png" />
            </div>
            <div className="img3">
                <img className="imagen3" src="../src/assets/productoA.png" />
            </div>
            <div className="descripcion">descripcion</div>
            <div className="colores">colores</div>
            <div className="cantidad">cantidad</div>
            <button className="botonera" onClick={() => navigate(`/home`)}>agregar al carrito y seguir comprando</button>
        </div>

    </>
};

