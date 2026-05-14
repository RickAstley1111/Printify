import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout from './Layout'
import MainPage from './pages/MainPageReg/MainPage'
import Login from './pages/LogIn/Login'
import Register from './pages/Register/Register'
import ShopPage from './pages/ShopPage/ShopPage'
import ShopSinglePage from './pages/ShopSinglePage/ShopSinglePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ContactPage from './pages/ContactPage/ContactPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <MainPage /> },
      { path: '/home', element: <MainPage /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/product/:id', element: <ShopSinglePage /> },
      { path: '/profile', element: <ProfilePage /> },
      { path: '/contacts', element: <ContactPage /> },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
