import './App.css'
import { CartProdiver } from './context/cart.context'
import { SelectedCategoryProdiver } from './context/selectedCategory.context'
import { ToastProvider } from './context/toast.context'
import { AppRouter } from './routes'

function App() {
  return (
    <>
      <CartProdiver>
        <SelectedCategoryProdiver>
          <ToastProvider>
            <AppRouter />
          </ToastProvider>
        </SelectedCategoryProdiver>
      </CartProdiver>
    </>
  )
}

export default App
