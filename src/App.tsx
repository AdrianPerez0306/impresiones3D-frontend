import './App.css'
import { AppRouter } from './routes'
import { Provider } from 'react-redux'
import { userStore } from './redux/store.ts'

function App() {
  return (
    <>
      <Provider store={userStore}>
        <AppRouter/>
      </Provider>
    </>
  )
}

export default App
