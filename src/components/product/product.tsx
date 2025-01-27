
import { useNavigate } from 'react-router-dom';
import './product.css'
import { InterfaceProduct } from '../../models/module';
import ButtonGreen from '../buttonGreen/buttonGreen';
import { ArticuloInterface } from '../../models/Articulo';

export const Product = ({ product }: { product: ArticuloInterface }) => {
    const navigate = useNavigate()
    // const toast = useToast()
    // const dispatcher = useDispatch()

    function goToDetail() {
        navigate(`/productos/${product.id}`)
    }
    // hay qe acomodarlo en el detalle
    // function handleClick() {
    //     dispatcher(
    //         addItem({
    //             itemId: product.id,
    //             itemQuantity: 1
    //         })
    //     )
    //     toast?.open("MOCK", "success")
    // }

    return <>
        <div className="product">
            <img src={`${product.imagen_1}`} alt="IMG" />

            <div className="content">
                <h5>{`${product.titulo}`}</h5>
                <p className='price'>{`$ ${product.precio_lista}`}</p>
                <p className="info">{`${product.detalle}`}</p>
            </div>
                <ButtonGreen label='Comprar' onClick={goToDetail}></ButtonGreen>
        </div>
    </>
};
