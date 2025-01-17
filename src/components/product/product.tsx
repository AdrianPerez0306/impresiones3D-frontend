
import { useNavigate } from 'react-router-dom';
import './product.css'
import { InterfaceProduct } from '../../models/module';
import { useToast } from '../../hooks/useToast';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/states/cart';
import { Search } from '../search/search';
import ButtonGreen from '../buttonGreen/buttonGreen';

export const Product = ({ product }: { product: InterfaceProduct }) => {
    const navigate = useNavigate()
    const toast = useToast()
    const dispatcher = useDispatch()

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
            <img src={`${product.img}`} alt="IMG" />

            <div className="content">
                <h5>{`${product.title}`}</h5>
                <p className='price'>{`$ ${product.price}`}</p>
                <p className="info">{`${product.info}`}</p>
            </div>
                <ButtonGreen label='Comprar' onClick={goToDetail}></ButtonGreen>
        </div>
    </>
};
