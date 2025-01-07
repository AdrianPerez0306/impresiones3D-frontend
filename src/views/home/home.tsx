import { Product } from "../../components/product/product";
import { CartProvider } from "../../context/cart.context";
import { products } from "../../models/module";
import './home.css';

export const Home = () => {
    const listProducts = products.map((product) =>
        <Product product={product}></Product>
    )
    
    return <>
        {/* <CartProvider> */}
            <div className="products">
                {listProducts}
            </div>
        {/* </CartProvider> */}
    </>
};
