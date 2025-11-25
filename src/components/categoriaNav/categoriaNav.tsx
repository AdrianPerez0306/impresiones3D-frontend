import { useState, useEffect, useRef } from "react";
import { CategoriaType } from "../../models/category";
import './categoriaNav.css'
import { useSelectedCategory } from "../../hooks/useSelectedCategory";
type CategoriaProps = {
    listCategoria: CategoriaType[];
};

export const CategoriaNav = ({ listCategoria }: CategoriaProps) => {
    const [menuVisible, setMenuVisible] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const selectedCategory = useSelectedCategory();

    const clickDetectado = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setMenuVisible(false);
            selectedCategory.reset();
        }
    };

 
    useEffect(() => {
        document.addEventListener("mousedown", clickDetectado);
        return () => {
            document.removeEventListener("mousedown", clickDetectado);
        };
    }, []);

    return (
        <div className="dropdown" ref={dropdownRef}>
            <p className="dropdown-trigger" onClick={() => setMenuVisible(!menuVisible)}>
                Categorías
            </p>
            <p className="dropdown-trigger">{selectedCategory.category}</p>
            {menuVisible && (
                <div className="dropdown-menu">
                    {listCategoria.map((categoria: CategoriaType, index:number) => (
                        <button onClick={(_)=>(selectedCategory.setCategory(categoria.nombre))} key={categoria.id}>
                            <span key={categoria.id} className="dropdown-item">
                                {categoria.nombre[0].toUpperCase() + categoria.nombre.slice(1) }
                            </span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
