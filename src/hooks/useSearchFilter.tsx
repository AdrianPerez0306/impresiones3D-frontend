import { useContext } from "react";
import { SearchFilterContext } from "../context/searchFilter.context";

export const useSearchFilter = () => {
    const context = useContext(SearchFilterContext);
    if (!context) {
      throw new Error('useSearchFilter() must be used within a SearchFilterProvider');
    }
    return context;
};