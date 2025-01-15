import './App.css'
import { AppRouter } from './routes'
import { Provider } from 'react-redux'
import { appStore } from './redux/store.ts'

function App() {
  return (
    <>
      <Provider store={appStore}>
        <AppRouter/>
      </Provider>
    </>
  )
}

export default App
