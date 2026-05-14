import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./ShopPage.css";
import Header from "../../components/Header/Header";
import ProductCard from "./ProductCard";
import EmptyState from "../../components/EmptyState";
import SkeletonGrid from "../../components/SkeletonGrid";
import { Slider } from "@mui/material";
import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";

const ShopPage = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

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

  // Lock body scroll when bottom sheet is open
  useEffect(() => {
    if (isFilterOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isFilterOpen]);

  return (
    <div className="shop_page_bg">
      <div className="container"><Header /></div>
      <div className="container">
        <div className="products">

          {/* Backdrop for mobile bottom sheet */}
          {isFilterOpen && (
            <div className="filter_backdrop" onClick={() => setIsFilterOpen(false)} />
          )}

          <aside className={`products_left ${isFilterOpen ? "open" : ""}`}>
            <div className="sheet_handle" />
            <button className="close_filter" onClick={() => setIsFilterOpen(false)}>×</button>
            <div className="products_filter">
              <div className="products_filter_title"><h2>{t.filter}</h2></div>

              <div className="products_filter_row">
                <h3>{t.productType}</h3>
                <div className="products_filter_types">
                  {types.map((type) => (
                    <button
                      key={type}
                      className={`type_btn ${selectedType === type ? "active" : ""}`}
                      onClick={() => setSelectedType(selectedType === type ? "" : type)}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              <div className="products_filter_row">
                <h3>{t.color}</h3>
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
                <h3>{t.priceRange}</h3>
                <Slider
                  value={priceRange}
                  onChange={(e, v) => setPriceRange(v)}
                  max={1000000}
                  sx={{ color: "#baff19" }}
                />
                <div className="price_labels">
                  <span>{priceRange[0].toLocaleString()}</span>
                  <span>{priceRange[1].toLocaleString()} {t.sum}</span>
                </div>
              </div>

              <button className="reset_btn" onClick={() => {
                setSearchQuery(""); setSelectedType(""); setSelectedColor(""); setPriceRange([0, 1000000]);
              }}>{t.resetAll}</button>
            </div>
          </aside>

          <main className="products_right">
            <div className="header_top_row">
              <h2 className="section_title">{t.products}</h2>
              <button className="filter_burger_btn" onClick={() => setIsFilterOpen(true)}>
                <div className="burger_icon"><span></span><span></span><span></span></div>
                <span>{t.filter}</span>
              </button>
            </div>

            <div className="search_wrapper">
              <div className="search_container">
                <input
                  type="text"
                  placeholder={t.searchProducts}
                  className="search_input"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            {loading ? (
              <SkeletonGrid count={6} />
            ) : products?.length === 0 ? (
              <EmptyState
                title={t.noProducts}
                message="Looks like this space is empty… let's print something cool!"
              />
            ) : (
              <div className="products_grid stagger">
                {products.map((product) => (
                  <NavLink to={`/product/${product.id || product._id}`} key={product.id || product._id} className="product_link">
                    <ProductCard product={product} />
                  </NavLink>
                ))}
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
