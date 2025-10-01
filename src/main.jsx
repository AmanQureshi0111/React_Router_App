import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Layout from './Layout.jsx'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
const router=createBrowserRouter([
  {
    path:'/',
    element: <Layout/>,
    children: [
      {
        path:"home",
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
