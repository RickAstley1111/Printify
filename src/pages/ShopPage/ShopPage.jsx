import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./ShopPage.css";
import Header from "../../components/Header/Header";
import ProductCard from "./ProductCard";
import { Slider } from "@mui/material";

const ShopPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter States
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [priceRange, setPriceRange] = useState([0, 1000000]);

  const colorMap = [
    { name: "Yashil", hex: "#84f0eb" },
    { name: "Sabzirand", hex: "#e04f54" },
    { name: "Jigarang", hex: "#404040" }
  ];

  const types = ["3D Printed", "3D Model", "Custom print", "Custom model"];

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:5050/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Frontend Logic: Filters the list in real-time
  const filteredProducts = products.filter((item) => {
    const matchesSearch = item.text.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesType = selectedType ? item.product_type === selectedType : true;
    const matchesColor = selectedColor ? item.color.includes(selectedColor) : true;
    
    const numericPrice = parseInt(String(item.price).replace(/\D/g, "")) || 0;
    const matchesPrice = numericPrice >= priceRange[0] && numericPrice <= priceRange[1];

    return matchesSearch && matchesType && matchesColor && matchesPrice;
  });

  return (
    <div className="shop_page_bg">
      <div className="container"><Header /></div>
      <div className="container">
        <div className="products">
          
          <aside className={`products_left ${isFilterOpen ? "open" : ""}`}>
            <button className="close_filter" onClick={() => setIsFilterOpen(false)}>×</button>
            <div className="products_filter">
              <div className="products_filter_title"><h2>Filter</h2></div>
              
              <div className="products_filter_row">
                <h3>Product Type</h3>
                <div className="products_filter_types">
                  {types.map((t) => (
                    <button 
                      key={t} 
                      className={`type_btn ${selectedType === t ? "active" : ""}`}
                      onClick={() => setSelectedType(selectedType === t ? "" : t)}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div className="products_filter_row">
                <h3>Color</h3>
                <div className="products_filter_colors">
                  {colorMap.map((c) => (
                    <div 
                      key={c.name} 
                      className={`color_swatch ${selectedColor === c.name ? "active" : ""}`}
                      style={{ backgroundColor: c.hex }}
                      onClick={() => setSelectedColor(selectedColor === c.name ? "" : c.name)}
                    ></div>
                  ))}
                </div>
              </div>

              <div className="products_filter_row">
                <h3>Price Range</h3>
                <Slider 
                  value={priceRange}
                  onChange={(e, v) => setPriceRange(v)}
                  max={1000000}
                  sx={{ color: "#d4ff4d" }} 
                />
                <div className="price_labels">
                  <span>{priceRange[0].toLocaleString()}</span>
                  <span>{priceRange[1].toLocaleString()} sum</span>
                </div>
              </div>

              <button className="reset_btn" onClick={() => {
                setSearchQuery(""); setSelectedType(""); setSelectedColor(""); setPriceRange([0, 1000000]);
              }}>Reset All</button>
            </div>
          </aside>

          <main className="products_right">
            <div className="header_top_row">
              <h2 className="section_title">Products</h2>
              <button className="filter_burger_btn" onClick={() => setIsFilterOpen(true)}>
                <div className="burger_icon"><span></span><span></span><span></span></div>
                <span>Filter</span>
              </button>
            </div>

            <div className="search_wrapper">
              <div className="search_container">
                <input 
                  type="text" 
                  placeholder="Search products..." 
                  className="search_input" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="products_grid">
              {
                products?.length == 0 ? <p>no products available</p> : <></> 
              }
              {!loading && products.map((product) => (
                <NavLink to={`/product/${product.id || product._id}`} key={product.id || product._id} className="product_link">
                  <ProductCard product={product} />
                </NavLink>
              ))}
            </div>
            {loading && <div className="loading_text">Loading...</div>}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;