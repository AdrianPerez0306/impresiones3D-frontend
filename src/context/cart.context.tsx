import { createContext, ReactNode, useCallback, useMemo, useState } from "react"
import { CartProduct, CartProductAmmountByDimmensionAndColor } from "../models/product";


type CartContextType = {
    add: (products: CartProduct[]) => void;
    remove: (productsIds: number[]) => void;
    clear: () => void;
    items: CartProduct[];
}

export const CartContext = createContext<(CartContextType | undefined)>(undefined)


export const CartProdiver: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [products, setProducts] = useState<CartProduct[]>([]);

    function _checkNotEmpty(list: any[], errorMessage: string): void {
        if (list.length <= 0) {
            throw new Error(errorMessage);
        }
    }

    function _existingProduct(_products: CartProduct[], productId: number): boolean {
        return _products.some((product) => product.id === productId);
    }

    function _mergeProductVariants(products: CartProduct[], newProduct: CartProduct): void {
        const existingProduct = products.find(p => p.id === newProduct.id);
        if (!existingProduct) return;

        newProduct.orderDetails.forEach(newVariant => {
            if (_variantExists(existingProduct.orderDetails, newVariant)) {
                _increaseVariantQuantity(existingProduct.orderDetails, newVariant);
            } else {
                _addNewVariant(existingProduct.orderDetails, newVariant);
            }
        });
    }


    function _variantExists(variants: CartProductAmmountByDimmensionAndColor[], newVariant: CartProductAmmountByDimmensionAndColor): boolean {
        return variants.some(variant =>
            variant.dimmension_mm === newVariant.dimmension_mm &&
            variant.color === newVariant.color
        );
    }

    function _increaseVariantQuantity(variants: CartProductAmmountByDimmensionAndColor[], variantToUpdate: CartProductAmmountByDimmensionAndColor): void {
        const existingVariant = variants.find(v =>
            v.dimmension_mm === variantToUpdate.dimmension_mm &&
            v.color === variantToUpdate.color
        );
        if (existingVariant) {
            existingVariant.ammount += variantToUpdate.ammount;
        }
    }

    function _addNewVariant(variants: CartProductAmmountByDimmensionAndColor[], newVariant: CartProductAmmountByDimmensionAndColor): void {
        variants.push(newVariant);
    }


    // useCallback es ideal, ya que a veces estas funciones pueden ser pasadas como props, y sin useCallback
    //      cada vez que el componente se re-rendederize por algun cambio de estado, tambien lo hara la referencia
    //      de la funcion, por lo que cualquier hijo que reciba como prop esa funcion, estara recibiendo un "nuevo"
    //      prop, es decir, una nueva referencia. useCallback previene eso para la funcion especifica que se use.
    const addProducts = useCallback((_products: CartProduct[]) => {
        _checkNotEmpty(_products, "La lista de productos no puede estar vacía");
        setProducts((prevProducts) => {
            let updatedProducts: CartProduct[] = [...prevProducts];
            _products.forEach((product) => {
                if (_existingProduct(updatedProducts, product.id)) _mergeProductVariants(updatedProducts, product);
                else updatedProducts.push(product);
            });
            return updatedProducts;
        });
    }, []); 

    
    // useCallback es ideal, ya que a veces estas funciones pueden ser pasadas como props, y sin useCallback
    //      cada vez que el componente se re-rendederize por algun cambio de estado, tambien lo hara la referencia
    //      de la funcion, por lo que cualquier hijo que reciba como prop esa funcion, estara recibiendo un "nuevo"
    //      prop, es decir, una nueva referencia. useCallback previene eso para la funcion especifica que se use.
    const removeProducts = useCallback((productsIds: number[]) => {
        _checkNotEmpty(productsIds, "La lista de ids de productos no puede estar vacía");
        setProducts((prevProducts) => (
            prevProducts.filter((product) => !productsIds.includes(product.id))
        ));
    }, []);

    // useCallback es ideal, ya que a veces estas funciones pueden ser pasadas como props, y sin useCallback
    //      cada vez que el componente se re-rendederize por algun cambio de estado, tambien lo hara la referencia
    //      de la funcion, por lo que cualquier hijo que reciba como prop esa funcion, estara recibiendo un "nuevo"
    //      prop, es decir, una nueva referencia. useCallback previene eso para la funcion especifica que se use.
    const clearCart = useCallback(() => {
        setProducts([]);
    }, []); 

    const contextValue = useMemo(() => ({
        add: addProducts,
        remove: removeProducts,
        clear: clearCart,
        items: products
    }), [addProducts, removeProducts, clearCart, products])

    return (
        <>
            <CartContext.Provider value={contextValue}>
                {children}
            </CartContext.Provider>
        </>
    );

};