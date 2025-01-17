import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'
import Home from './Pages/Home.jsx'
import Notfind from './Pages/Notfind.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element : <Layout/>,
    children : [
      {
         path : '',
         element : <Login/>,
      },
      {
        path : 'register',
        element : <Register/>,
      },
      {
        path : 'home',
        element : <Home/>,
      },
      {
        path : '*',
        element : <Notfind/>,
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
)