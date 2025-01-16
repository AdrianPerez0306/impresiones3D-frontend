import './toast.css'

export type ToastOptions = 'success' | 'error' | 'info' | 'warning'

type ToastProperties = {
    message:string;
    option: ToastOptions;
    close: ()=>void,
} 

export function Toast({message, option, close}: ToastProperties){

    return (
        <div className={`toast ${option} show`} id="toast">
            <p>{message}</p>
            <button onClick={close}>X</button>
        </div>
    )

}


