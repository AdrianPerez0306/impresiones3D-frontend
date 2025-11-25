import { useContext } from "react";
import { SelectedCategoryContext } from "../context/selectedCategory.context";

export const useSelectedCategory = () => {
    const context = useContext(SelectedCategoryContext)
    if (!context) {
      throw new Error('useSelectedCategory() must be used within a SelectedCategoryProvider');
    }
    return context;
};