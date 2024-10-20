import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './fanta.css'

import {  
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import BioPage from './Pages/BioPage.jsx'
import EventsPages from './Pages/EventsPages.jsx'
import Contact from './Pages/Contact.jsx'
import ShopPage from './Pages/ShopPage.jsx'



const router = createBrowserRouter([ 
  {
    path:"/",
    element: <App/>
  },
  {
    path:"/BioPage",
    element: <BioPage/>
  },
  {
    path:"/EventPage",
    element: <EventsPages/>
  },
  {
    path:"/Contact",
    element: <Contact/>
  },
  {
    path:"/ShopPage",
    element: <ShopPage/>
  }

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
