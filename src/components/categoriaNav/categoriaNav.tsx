import { useState, useEffect, useRef } from "react";
import { CategoriaType } from "../../models/category";
import './categoriaNav.css'
import { useSelectedCategory } from "../../hooks/useSelectedCategory";
import { Button } from "../button/button";
import { useSearchFilter } from "../../hooks/useSearchFilter";
type CategoriaProps = {
    listCategoria: CategoriaType[];
};

export const CategoriaNav = ({ listCategoria }: CategoriaProps) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const selectedCategory = useSelectedCategory();

    const { reset } = useSearchFilter();

    const clickDetectado = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setMenuVisible(false);
            selectedCategory.reset();
        }
    };
    function changeCategory(categoria: CategoriaType){
        reset();
        selectedCategory.setCategory(categoria.nombre);
    };
    
    useEffect(() => {
        document.addEventListener("mousedown", clickDetectado);
        return () => {
            document.removeEventListener("mousedown", clickDetectado);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef} onClick={() => setMenuVisible(!menuVisible)}>

            <div style={{display:'flex', alignItems:'center'}}>
                <img src="/src/assets/filter.svg" alt="" />
                <p className="dropdown-trigger dropdown__label">
                    Categorías
                </p>
            </div>

            {/* <p className="dropdown-trigger">{selectedCategory.category}</p> */}
            {menuVisible && (
                <div className="dropdown-menu">
                    {listCategoria.map((categoria: CategoriaType, _: number) => (
                        <Button color="options" onClick={() => (changeCategory(categoria))} key={categoria.id}>
                            <p key={categoria.id} className="dropdown-item">
                                {categoria.nombre[0].toUpperCase() + categoria.nombre.slice(1)}
                            </p>
                        </Button>
                    ))}
                </div>
            )}
        </div>
    );
}
