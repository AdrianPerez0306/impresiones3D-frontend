import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products, InterfaceProduct } from "../../models/module";
import "./productDetail.css";
import ButtonGreen from "../../components/buttonGreen/buttonGreen";
import ButtonRed from "../../components/buttonRed/buttonRed";


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

    function agregarVolver(): () => void {
        return () => {
            // Logic to add the product to the cart or perform any action
            console.log("Product added to cart");
            // Navigate to another page or perform any other action
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
                <img className="imagen1" src="../src/assets/productoA.png" />
            </div>
            <div className="img2">
                <img className="imagen2" src="../src/assets/productoA.png" />
            </div>
            <div className="img3">
                <img className="imagen3" src="../src/assets/productoA.png" />
            </div>
            <div className="descripcion">Descripcion</div>
                <div className="colores">
                    <p>Selecciona un color</p>
                    <div className="ratios">

                        <label>
                            <input className="rojo" type="radio" name="opcion" value="opcion3" />
                            <span className="rojo"></span>                        
                        </label>
                        <label>
                            <input  className="negro" type="radio" name="opcion" value="opcion3" />
                            <span className="negro"></span>                        
                        </label>
                        <label>
                            <input className="azul" type="radio" name="opcion" value="opcion3" />
                            <span className="azul"></span>                        
                        </label>
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

