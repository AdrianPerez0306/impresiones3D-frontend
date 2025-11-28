import { createContext, ReactNode, useCallback, useMemo, useState } from "react"


type SelectedCategoryContextType = {
    category: string | undefined;
    setCategory: (category:string) => void;
    reset: () => void;
}

export const SelectedCategoryContext = createContext<(SelectedCategoryContextType | undefined)>(undefined)


export const SelectedCategoryProdiver: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [category, setCategory] = useState<string | undefined>(undefined);

    const setSelectedCategory = useCallback((newSelectedCategory: string) => {
            setCategory(newSelectedCategory);
            return;
    }, []); 

    const resetToAllProducts = useCallback(() => {
            setCategory(undefined);
            return;
    }, []); 


    const contextValue = useMemo(() => ({
        category,
        setCategory: setSelectedCategory,
        reset: resetToAllProducts,
    }), [category, setSelectedCategory, resetToAllProducts])

    return (
        <>
            <SelectedCategoryContext.Provider value={contextValue}>
                {children}
            </SelectedCategoryContext.Provider>
        </>
    );

};