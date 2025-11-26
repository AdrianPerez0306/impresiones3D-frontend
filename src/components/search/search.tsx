import { useState } from 'react';
import './search.css'
import { getProductsByFilter } from '../../service/product.service';
import { useSelectedCategory } from '../../hooks/useSelectedCategory';
import { useToast } from '../../hooks/useToast';

export const Search = () => {
    const [filter, setFilter] = useState("");
    const category = useSelectedCategory();
    const toast = useToast();
    const inputSearchHtmlName:string = "input__search"
    function updateInput(){
        setFilter(getInputSearchValue(inputSearchHtmlName).value)
    }

    function emptyInput():boolean{
        return getInputSearchValue(inputSearchHtmlName).value==""
    }
    function getInputSearchValue(inputHtmlName: string): HTMLInputElement {
        return (
            document.querySelector(`input[name="${inputHtmlName}"]`) as HTMLInputElement
        );
    }
    function handleSubmit(event: React.FormEvent) {
        if(emptyInput()){
            toast.open("Debe completar con algun caracter para buscar!", "error")
            return
        }
        event.preventDefault();//Previene el reload del form
        category.setCategory('search')
    }

    function handleClick() {
        if(emptyInput()){
            toast.open("Debe completar con algun caracter para buscar!", "error")
            return
        }
        category.setCategory('search')
    }

    return (
        <form className='search' onSubmit={handleSubmit}>
            <input id="input__search" name="input__search" type="text" placeholder="Buscar productos"
                    value={filter} onChange={updateInput}
                    className='input__search'
                    
            />
            <div className="lupa">
                <button onClick={handleClick}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="#FFFFFF" viewBox="0 0 256 256"><path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                    </svg>
                </button>
            </div>
        </form>
    );
}

