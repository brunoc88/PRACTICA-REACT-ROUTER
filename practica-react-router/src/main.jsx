import ReactDom from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from "./context/AuthContext";

ReactDom.createRoot(document.getElementById('root'))
  .render(
    <AuthProvider>{/*para que cualquier componente acceda a isAuth y setIsAuth, 
    es opcional solo usarlo para no estar pasando varias veces, sino se usa solo poner BrowserRouter
    para envolver a App*/}
      <BrowserRouter>{/*necesario para rutear*/}
        <App />
      </BrowserRouter>
    </AuthProvider>
  )
