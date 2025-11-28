import './loader.css'

export const Loader = ({message}:{message:string}) => {

    return (
        <div className="container__loader">
            Cargando {message}...
        </div>
    );
};
