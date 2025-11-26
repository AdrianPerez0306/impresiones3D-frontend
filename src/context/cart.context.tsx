import { createContext, ReactNode, useCallback, useMemo, useState } from "react"
import { CartProduct, CartProductAmmountByDimmensionAndColor } from "../models/product";


type CartContextType = {
    add: (products: CartProduct[]) => void;
    remove: (productsIds: number[]) => void;
    clear: () => void;
    updateAmmount: (productId: number, dimension: string, color: string, change: number) => void;
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

    function _findProductIndex(products: CartProduct[], productId: number): number {
        return products.findIndex(p => p.id === productId);
    }

    function _findVariantIndex(variants: CartProductAmmountByDimmensionAndColor[], newVariant: CartProductAmmountByDimmensionAndColor): number {
        return variants.findIndex(
            v =>    v.dimmension_mm.alto_mm === newVariant.dimmension_mm.alto_mm && 
                    v.dimmension_mm.ancho_mm === newVariant.dimmension_mm.ancho_mm && 
                    v.dimmension_mm.profundidad_mm === newVariant.dimmension_mm.profundidad_mm && 
                    v.color.hexValue === newVariant.color.hexValue
        );
    }

    function _updateExistingProduct(existingProduct: CartProduct, newProduct: CartProduct): void {
        newProduct.orderDetails.forEach(newVariant => {
            const existingVariantIndex = _findVariantIndex(existingProduct.orderDetails, newVariant);
            
            if (existingVariantIndex !== -1) {
                // Misma dimensión y color - sumar cantidad
                existingProduct.orderDetails[existingVariantIndex].ammount += newVariant.ammount;
            } else {
                // Nueva combinación - agregar
                existingProduct.orderDetails.push(newVariant);
            }
        });
    }

    function _addOrUpdateProducts(currentProducts: CartProduct[], newProducts: CartProduct[]): CartProduct[] {
        const updatedProducts = [...currentProducts];
        
        newProducts.forEach(newProduct => {
            const existingProductIndex = _findProductIndex(updatedProducts, newProduct.id);
            
            if (existingProductIndex !== -1) {
                // Producto ya existe - actualizar variantes
                _updateExistingProduct(updatedProducts[existingProductIndex], newProduct);
            } else {
                // Producto nuevo - agregar
                updatedProducts.push(newProduct);
            }
        });
        
        return updatedProducts;
    }


    // useCallback es ideal, ya que a veces estas funciones pueden ser pasadas como props, y sin useCallback
    //      cada vez que el componente se re-rendederize por algun cambio de estado, tambien lo hara la referencia
    //      de la funcion, por lo que cualquier hijo que reciba como prop esa funcion, estara recibiendo un "nuevo"
    //      prop, es decir, una nueva referencia. useCallback previene eso para la funcion especifica que se use.
    const addProducts = useCallback((_products: CartProduct[]) => {
        setProducts((prevProducts) => _addOrUpdateProducts(prevProducts, _products));
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

    const updateQuantity = useCallback((productId: number, dimension: string, colorName: string, change: number) => {
        setProducts((prevProducts) => {
            return prevProducts.map(product => {
                if (product.id === productId) {
                    const updatedOrderDetails = product.orderDetails.map(variant => {
                        if (variant.dimmension_mm.alto_mm.toString() + 'x' + variant.dimmension_mm.ancho_mm.toString() + 'x' + variant.dimmension_mm.profundidad_mm.toString() === dimension   &&
                            variant.color.nombre === colorName
                        ) {
                            return {
                                ...variant,
                                ammount: Math.max(0, variant.ammount + change) // No menor a 0
                            };
                        }
                        return variant;
                    }).filter(variant => variant.ammount > 0); // Eliminar si cantidad es 0
                    
                    return {
                        ...product,
                        orderDetails: updatedOrderDetails
                    };
                }
                return product;
            }).filter(product => product.orderDetails.length > 0); // Eliminar productos sin variantes
        });
    }, []);

    const contextValue = useMemo(() => ({
        add: addProducts,
        remove: removeProducts,
        clear: clearCart,
        items: products,
        updateAmmount: updateQuantity
    }), [addProducts, removeProducts, clearCart, products, updateQuantity])

    return (
        <>
            <CartContext.Provider value={contextValue}>
                {children}
            </CartContext.Provider>
        </>
    );

};