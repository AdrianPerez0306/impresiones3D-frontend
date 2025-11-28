import './veryImportantMessage.css'

export const VeryImportantMessage = () => {

    return(
        <span className="message__veryImportant">
            Los <span className='text__strong'>productos</span> de esta pagina <span className='text__strong'>NO ESTAN A LA VENTA</span>, son una representacion , ya que la venta de los mismos quedan a derecho del autor. La finalidad de esta pagina es emular el proyecto. El <span className='text__strong'>servicio de finalizar la compra y mail esta desactivado</span>.
        </span>
    );
}