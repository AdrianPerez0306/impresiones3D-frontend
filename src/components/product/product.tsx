
import { useNavigate } from 'react-router-dom';
import './product.css'
import { product } from '../../models/module';
import { useCart } from '../../hooks/useCart';

export const Product = ({product}:{product:product}) => {
    const navigate = useNavigate()
    const { addToCart } = useCart()
    function goToDetail(){
        navigate(`/products/${product.id}`)
    }
    return <>
        <div className="product">
            <img src={`${product.img}`} alt="IMG" />
            <div className="content">
                <h5>{`${product.title}`}</h5>
                <p className="info">{`${product.info}`}</p>
            </div>
            <div className="actions">
                <button className='mock' onClick={goToDetail}>Details</button>
                <button className='mock' onClick={()=> addToCart(product)}>Buy</button>
            </div>
        </div>
    </>
};
