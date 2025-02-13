import { useState } from "react";
import { CategoriaType } from "../../models/Categoria";
import './categoriaNav.css'

type CategoriaProps = {
    listCategoria: CategoriaType[];
  };

export const CategoriaNav = ({listCategoria}: CategoriaProps) => {
    const [menuVisible, setMenuVisible] = useState(false);
    return(
        <div className="dropdown">
            <p className="dropdown-trigger" onClick={() => setMenuVisible(!menuVisible)}>
            Categorías ▼
            </p>
            {menuVisible && (
            <div className="dropdown-menu">
                {listCategoria.map((categoria: CategoriaType) => (
                <span key={categoria.id} className="dropdown-item">
                    {categoria.nombre}
                </span>
                
                ))}
            </div>
            )}
        </div>
    )
}
