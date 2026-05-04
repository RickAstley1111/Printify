import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import MainPage from './pages/MainPageReg/MainPage'
import Login from './pages/LogIn/Login'
import Register from './pages/Register/Register'
import ShopPage from './pages/ShopPage/ShopPage'
import ShopSinglePage from './pages/ShopSinglePage/ShopSinglePage'
import ProfilePage from './pages/ProfilePage/ProfilePage'
import ContactPage from './pages/ContactPage/ContactPage'

function App() {

  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of the div is visible
    rootMargin: "0px 0px -50px 0px" // Triggers slightly before it hits the bottom
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('div').forEach(div => {
      observer.observe(div);
    });
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <MainPage />
        },
        {
          path: "/home/",
          element: <MainPage />
        },
        {
          path: "/login",
          element: <Login />
        },
        {
          path: "/register",
          element: <Register />
        },
        {
          path: "/shop",
          element: <ShopPage />
        },
        {
          path: "/product/:id",
          element: <ShopSinglePage />
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
        {
          path:"/contacts",
          element:<ContactPage/>
        }

      ]
    },

  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
