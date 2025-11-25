
import { useNavigate } from 'react-router-dom';
import './product.css'
import { Button } from '../button/button';
import { ArticuloInterface } from '../../models/Articulo';

export const Product = ({ product }: { product: ArticuloInterface }) => {
    const navigate = useNavigate()

    function goToDetail() {
        navigate(`/productos/${product.id}`)
    }

    return <>
        <div className="product">
            <img src={`${product.imagen}`} alt="IMG" />

            <div className="content">
                <h5>{`${product.titulo}`}</h5>
                <p className='price'>{`$ ${product.precio_lista}`}</p>
            </div>
                <Button color='blue' onClick={goToDetail}>Comprar</Button>

        </div>
    </>
};
