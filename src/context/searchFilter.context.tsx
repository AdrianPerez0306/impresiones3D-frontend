import { createContext, ReactNode, useCallback, useMemo, useState } from "react";


type SearchFilterContextType = {
    value: string | undefined;
    setValue: (filter:string) => void;
    valid: () => boolean;
    reset: () => void;
}

export const SearchFilterContext = createContext<(SearchFilterContextType | undefined)>(undefined)


export const SearchFilterProdiver: React.FC<{ children: ReactNode }> = ({ children }) => {

    const [searchFilter, setSearchFilter] = useState<string | undefined>(undefined);

    const setSearchFilterValue = useCallback((newSelectedCategory: string) => {
            setSearchFilter(newSelectedCategory);
            return;
    }, []); 

    const resetToNoFilter = useCallback(() => {
            setSearchFilter(undefined);
            return;
    }, []); 

    const validValue = useCallback(() => {
            return (searchFilter !== undefined) && (searchFilter.trim() !== "");
    }, [searchFilter]); 


    const contextValue = useMemo(() => ({
        value: searchFilter,
        setValue: setSearchFilterValue,
        reset: resetToNoFilter,
        valid: validValue
    }), [searchFilter, setSearchFilterValue, resetToNoFilter, validValue])

    return (
        <>
            <SearchFilterContext.Provider value={contextValue}>
                {children}
            </SearchFilterContext.Provider>
        </>
    );

};