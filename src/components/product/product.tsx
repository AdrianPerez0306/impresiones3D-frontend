
import { useNavigate } from 'react-router-dom';
import './product.css'
import { Button } from '../button/button';
import { ProductCardHome } from '../../models/product';

export const Product = ({ product }: { product: ProductCardHome }) => {
    const navigate = useNavigate()

    function goToDetail() {
        navigate(`/productos/${product.id}`)
    }

    return <>
        <div className="product"  >
            <img src={`/public/assets/${product.imagen}`} alt="IMG" />

            <div className="content">
                <h4 className='title'>{`${product.titulo}`}</h4>
                <p className='price'>{`$${product.precio_lista}`}</p>
                <div className='color__options' key={product.id}>
                    {product.colores.map((color) => (<>
                        <div className="color__wrapper" key={color.id}>
                            <div  style={{ backgroundColor: `#${color.hexValue}` }} className='color__option--circle'></div>
                            <div className='color__option--hoverHexValue'>{color.nombre[0].toUpperCase() + color.nombre.slice(1)} | #{color.hexValue}</div>
                        </div>
                    </>))}
                </div>
            </div>

            <Button color='lighted' onClick={goToDetail}>Comprar</Button>


        </div>
    </>
};
