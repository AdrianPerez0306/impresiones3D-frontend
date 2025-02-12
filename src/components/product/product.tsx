
import { useNavigate } from 'react-router-dom';
import './product.css'
import ButtonGreen from '../buttonGreen/buttonGreen';
import { ArticuloInterface } from '../../models/Articulo';

export const Product = ({ product }: { product: ArticuloInterface }) => {
    const navigate = useNavigate()

    function goToDetail() {
        navigate(`/productos/${product.id}`)
    }

    return <>
        <div className="product">
            <img src={`${product.imagen_1}`} alt="IMG" />

            <div className="content">
                <h5>{`${product.titulo}`}</h5>
                <p className='price'>{`$ ${product.precio_lista}`}</p>
                <p className="info">{`Medidas ${product.dimension_mm}`}</p>
            </div>
                <ButtonGreen label='Ver' onClick={goToDetail}></ButtonGreen>
        </div>
    </>
};
