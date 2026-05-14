import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../../components/Header/Header";
import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";
import "./ShopSinglePage.css";

const ShopSinglePage = () => {
  const { id } = useParams();
  const { lang } = useLanguage();
  const t = translations[lang];
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState("");

  // Interaction States
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  // Comment States
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const response = await axios.get(`http://localhost:5050/api/products/${id}`);
        const data = response.data;

        setProduct(data);
        // Adaptation: use the first item in the images array
        if (data.images && data.images.length > 0) {
          setSelectedImage(data.images[0]);
        }

        // Defaults based on new structure
        if (data.colors && data.colors.length > 0) setSelectedColor(data.colors[0]);
        if (data.sizes && data.sizes.length > 0) setSelectedSize(data.sizes[0]);

        setComments(data.comments || [
          { name: "Daniel Joseph", text: "Stunning quality, highly recommend!", rating: 5 },
          { name: "Sarah Connor", text: "The 3D detail is insane.", rating: 5 }
        ]);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductData();
  }, [id]);

  const handleAddToCart = () => {
    const cartItem = {
      productId: product._id,
      name: product.text,
      color: selectedColor,
      size: selectedSize,
      price: product.price,
      image: selectedImage
    };
    console.log("Added to cart:", cartItem);
    alert(`${product.text} qo'shildi!`);
  };

  const handlePostComment = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !userName.trim()) return;

    const commentData = {
      name: userName,
      text: newComment,
      rating: 5,
      date: new Date().toISOString()
    };

    setComments([commentData, ...comments]);
    setNewComment("");
    setUserName("");
  };

  if (loading) return <div className="loading_text">{t.loading}</div>;
  if (!product) return <div className="loading_text">{t.productNotFound}</div>;

  return (
    <div className="single_product_page">
      <div className="container"><Header /></div>

      <main className="container">
        <div className="product_top_section">
          <h1 className="collection_title">

          </h1>

          <div className="product_main_content">
            {/* Gallery: Mapping the images array */}
            <div className="product_gallery">
              <div className="main_image_container">
                <img src={selectedImage} alt={product.text} />
              </div>
              <div className="thumbnail_list">
                {product.images?.map((img, idx) => (
                  <div
                    key={idx}
                    className={`thumb_item ${selectedImage === img ? "active" : ""}`}
                    onClick={() => setSelectedImage(img)}
                  >
                    <img src={img} alt={`thumb-${idx}`} />
                  </div>
                ))}
              </div>
            </div>

            {/* Details */}
            <div className="product_details_info">
              <div className="detail_header">
                <h2>{product.text}</h2>
                <span className="single_price">{product.price} {t.sum}</span>
              </div>
              <span className="highlight">{product.product_type}</span>
              <p className="single_description">{product.description}</p>

              <div className="options_group">
                <h3>{t.colors}</h3>
                <div className="color_options">
                  {product.colors?.map(color => (
                    <span
                      key={color}
                      className={`color_circle ${selectedColor === color ? 'active' : ''}`}
                      style={{ backgroundColor: color }}
                      onClick={() => setSelectedColor(color)}
                    ></span>
                  ))}
                </div>
              </div>

              <div className="options_group">
                <h3>{t.size}</h3>
                <div className="size_options">
                  {product.sizes?.map(size => (
                    <button
                      key={size}
                      className={`size_btn ${selectedSize === size ? "active" : ""}`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <button className="add_to_cart_main" onClick={handleAddToCart}>
                {t.addToCard}
              </button>
            </div>
          </div>
        </div>

        <section className="comments_section">
          <h2 className="comments_title">{t.comments} ({comments.length})</h2>

          <form className="comment_form" onSubmit={handlePostComment}>
            <input
              type="text"
              placeholder={t.yourName}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <textarea
              placeholder={t.shareThoughts}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="post_btn">{t.postComment}</button>
          </form>

          <div className="comments_grid">
            {comments.map((c, idx) => (
              <div key={idx} className="comment_card">
                <h4>{c.name}</h4>
                <div className="stars">{"★".repeat(c.rating)}{"☆".repeat(5 - c.rating)}</div>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ShopSinglePage;