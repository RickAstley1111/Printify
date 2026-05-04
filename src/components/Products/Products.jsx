import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import backIcon from '../../assets/bottomR.png'
import './Products.css'

const Products = () => {
  const navigate = useNavigate()
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5050/api/products')
        const data = await response.json()
        
        // Use .slice(0, 4) to only keep the first 4 items
        setProducts(data.slice(0, 4))
      } catch (error) {
        console.error("Error fetching products:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  const goToSingle = (id) => {
    navigate(`/product/${id}`)
  }

  if (loading) return null // Or a small spinner to keep the main page clean

  return (
    <div>
      <div className='services-header_inner'>
        <img 
          src={backIcon} 
          alt="back" 
          onClick={() => navigate(-1)} 
          style={{ cursor: 'pointer' }}
        />
        <p className='services-header_title'>Projects</p>
      </div>

      <ul className='products_list'>
        {products?.map((el) => (
          <li key={el.id} className='products_list-item'>
            <div className='products_card'>
              <div className='products_list-item-img'>
                <img src={el?.images[0]} alt={el.title} />
              </div>

              <div className='products_list-item-content'>
                <div>
                  <p className='product-title'>{el.text}</p>
                  <span className='product-price'>{el.price}</span>
                </div>
                <button onClick={() => goToSingle(el.id)}>
                  review
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <div className="see_more_btn_out">
        <button onClick={() => navigate("/shop")}>See more</button>
      </div>
    </div>
  )
}

export default Products;