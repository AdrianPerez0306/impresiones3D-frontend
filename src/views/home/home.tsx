import { useEffect, useState } from "react";
import { Product } from "../../components/product/product";
import './home.css';
import { useSelectedCategory } from "../../hooks/useSelectedCategory";
import { getAll, getProductsByCategory, getProductsByTitleFilter } from "../../service/product.service";
import { ProductCardHome } from "../../models/product";
import { useSearchFilter } from "../../hooks/useSearchFilter";

export const Home = () => {
    const [products, setProducts] = useState<ProductCardHome[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const selectedCategory = useSelectedCategory();
    const searchFilter = useSearchFilter();

    const getAllProducts = async () => {
        try {
            setLoading(true);
            const _products = await getAll();
            setProducts(_products)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const loadByCategory = async () => {
        try {
            setLoading(true);
            const _products = await getProductsByCategory(selectedCategory.category!);
            setProducts(_products)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    const loadByTitleSearch = async () => {
        try {
            setLoading(true);
            const _products = await getProductsByTitleFilter(searchFilter.value!);
            setProducts(_products)
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        console.log("filtro",searchFilter.value)
        console.log("filterValid: ",searchFilter.valid())
        console.log("categoria",selectedCategory.category)
        if (selectedCategory.category){
            loadByCategory()
        }
        else if(searchFilter.valid()){
            loadByTitleSearch();
        }
        else {
            getAllProducts();
        }
    }, [selectedCategory.category, searchFilter.value])


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
