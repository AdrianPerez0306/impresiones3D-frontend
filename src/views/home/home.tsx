import { Product } from "../../components/product/product";
import { ToastProvider } from "../../context/toast.context";

import { products } from "../../models/module";
import './home.css';

export const Home = () => {
    const listProducts = products.map((product, index) =>
        <Product key={index} product={product}></Product>
    )

    return <>
        <div className="productsList">
                {listProducts}
                {listProducts}
        </div>
    </>
};
