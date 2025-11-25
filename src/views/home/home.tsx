import { useEffect, useState } from "react";
import { Product } from "../../components/product/product";
import './home.css';
import { useSelectedCategory } from "../../hooks/useSelectedCategory";
import { getAll, getProductsByCategory } from "../../service/product.service";
import { ProductBasicType } from "../../models/product";

export const Home = () => {
    const [products, setProducts] = useState<ProductBasicType[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const { category } = useSelectedCategory();

    const getAllProducts = async () => {
        try {
            const _products = await getAll();
            setProducts(_products)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const loadByCategory = async () => {
        try {
            const _products = await getProductsByCategory(category!);
            setProducts(_products)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (category) { loadByCategory(); }
        else { getAllProducts(); }
    }, [category])


    if (loading) {
        return <div>Cargando...</div>
    }

    return <>
        <div className="productsList">
            {products.map((product, index) =>
                <Product key={index} product={product}></Product>
            )}
        </div>
    </>
};
