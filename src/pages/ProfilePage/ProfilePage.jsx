import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import abr from '../../assets/Abror.png';
import Header from '../../components/Header/Header';
import LatestActivities from '../../components/LatestActivities/LatestActivities';
import axios from 'axios';
import { Modal } from '@mui/material';

const ProfilePage = () => {
  const [open, setOpen] = useState(false);
  
  // --- INITIAL STATE ---
  const initialFormState = {
    text: "",
    description: "",
    product_type: "",
    price: 0,
    plastic_type: [], // Multi-select array
    rating: 0,
    colors: [],
    images: [],
    sizes: [],
  };

  const [productData, setProductData] = useState(initialFormState);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [products, setProducts] = useState([]); 

  // --- OPTIONS ---
  const colorOptions = ['green', 'yellow', 'blue', 'cyan', 'red', 'purple'];
  const sizeOptions = ['20x20x20cm', '10x10x10cm', '15x10x30cm'];
  const typeOptions = ['3d printed', '3d model', 'custom 3d print', 'custom 3d model'];
  const plasticOptions = ['PLA', 'TPU', 'ABS', 'PETG', 'Nylon', 'Carbon Fiber'];

  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  // --- FUNCTIONS ---

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({ 
      ...prev, 
      [name]: name === "price" ? (value === "" ? 0 : Number(value)) : value 
    }));
  };

  const handleToggle = (key, value) => {
    setProductData(prev => ({
      ...prev,
      [key]: prev[key].includes(value)
        ? prev[key].filter(i => i !== value) // Unselect
        : [...prev[key], value]              // Select
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length > 0) {
      const newPreviews = files.map(file => URL.createObjectURL(file));
      setImagePreviews(prev => [...prev, ...newPreviews]);
      setProductData(prev => ({ ...prev, images: [...prev.images, ...files] }));
    }
  };

  const removeImage = (index) => {
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
    setProductData(prev => ({ 
      ...prev, 
      images: prev.images.filter((_, i) => i !== index) 
    }));
  };

  const sendData = async (data) => {
    try {
      const res = await axios.post("http://localhost:5050/api/products", data);
      console.log("Response:", res.data);
    } catch (err) {
      console.error("Upload Error:", err.response?.data || err.message);
    }
  };

  const handleSaveProduct = (e) => {
    e.preventDefault();

    // Formatting payload for backend
    const finalObject = {
      ...productData,
      rating: String(productData.rating),
      product_type: productData.product_type.toString() 
    };

    console.log("Sending Data:", finalObject);
    sendData(finalObject);

    // Reset everything
    setOpen(false);
    setProductData(initialFormState);
    setImagePreviews([]);
  };

  const handleClose = () => {
    setOpen(false);
    imagePreviews.forEach(url => URL.revokeObjectURL(url));
  };

  console.log(productData);
  

  return (
    <div className='fullpage'>
      <div className="container"><Header /></div>
      <div className="container">
        <div className="profile-dashboard">

          {/* SETTINGS SECTION */}
          <section className="settings-section">
            <h2 className="section-title">PROFILE <span className="text-lime">SETTINGS</span></h2>
            <div className="settings-grid">
              <div className="profile-pic-side">
                <img src={abr} alt="Profile" className="profile-img" />
                <button className="btn-change">Change Photo</button>
                <button className="btn-save-main">Save All changes</button>
              </div>

              <div className="form-side">
                <div className="form-columns">
                  <div className="inputs-col">
                    <div className="input-group">
                      <label>First Name</label>
                      <input type="text" placeholder="First name" />
                    </div>
                    <div className="input-group">
                      <label>Last Name</label>
                      <input type="text" placeholder="Last Name" />
                    </div>
                  </div>
                  <div className="bio-col">
                    <div className="input-group stretch-height">
                      <label>Bio</label>
                      <textarea className="bio-textarea" placeholder="Describe your studio..."></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="add-product-banner">
              <div className="banner-text">
                <h3>Add your own product</h3>
                <p>⚠️ Only 3D related high-quality products</p>
              </div>
              <button className="btn-open-modal" onClick={() => setOpen(true)}>Add product</button>
            </div>
          </section>

          {/* PRODUCTS GRID */}
          <section className="products-section">
            <h2 className="section-title center">MY <span className="text-lime">PRODUCTS</span></h2>
            <div className="product-grid">
              {products.length > 0 ? products.map((item, idx) => (
                <div className="product-card" key={idx}>
                  <div className="card-image-wrapper">
                    <img src={item.displayImg} alt="product" />
                    <div className="floating-colors">
                      {item.colors.map(c => <span key={c} className={`sample-dot ${c}`}></span>)}
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-header-row">
                      <h3>{item.text}</h3>
                      <div className="header-badges">
                        <span className="size-text">{item.sizes[0]}</span>
                        <span className="time-badge">20m</span>
                      </div>
                    </div>
                    <p className="description-text">{item.description}</p>
                    <div className="card-footer-sample">
                      <span className="price-tag-sample">{item.price} UZS</span>
                      <button className="btn-add-to-card">Add to card +</button>
                    </div>
                  </div>
                </div>
              )) : <p style={{color: '#888', textAlign: 'center', width: '100%'}}>No products found.</p>}
            </div>
          </section>

          <div className='graph-section'>
            <LatestActivities />
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose}>
        <div className='modal-container'>
          <div className="modal-content">
            <div className="modal-top">
              <h2>New Product</h2>
              <button type="button" className="btn-close" onClick={handleClose}>&times;</button>
            </div>

            <form onSubmit={handleSaveProduct}>
              <div className="m-field">
                <label>Upload Images</label>
                <div className="image-selection-grid">
                  {imagePreviews.map((url, i) => (
                    <div key={i} className="img-prev-box">
                      <img src={url} alt="prev" />
                      <button type="button" className="remove-img-btn" onClick={() => removeImage(i)}>&times;</button>
                    </div>
                  ))}
                  <label className="add-img-placeholder">
                    <input type="file" accept="image/*" multiple onChange={handleImageChange} className="hide-input" />
                    <span>+</span>
                  </label>
                </div>
              </div>

              <div className="m-field">
                <label>Product Name</label>
                <input type="text" name="text" required value={productData.text} onChange={handleChange} />
              </div>

              <div className="m-field">
                <label>Price (UZS)</label>
                <input type="number" name="price" required value={productData.price} onChange={handleChange} />
              </div>

              <div className="m-field">
                <label>Type</label>
                <div className="options-flex">
                  {typeOptions.map(t => (
                    <button key={t} type="button"
                      className={productData.product_type === t ? "chip active" : "chip"}
                      onClick={() => setProductData({ ...productData, product_type: t })}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* PLASTIC TYPE SELECTION */}
              <div className="m-field">
                <label>Plastic Types</label>
                <div className="options-flex">
                  {plasticOptions.map(p => (
                    <button key={p} type="button"
                      className={productData.plastic_type.includes(p) ? "chip active" : "chip"}
                      onClick={() => handleToggle('plastic_type', p)}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div className="m-field">
                <label>Colors</label>
                <div className="options-flex">
                  {colorOptions.map(c => (
                    <button key={c} type="button"
                      className={productData.colors.includes(c) ? "chip active" : "chip"}
                      onClick={() => handleToggle('colors', c)}>{c}</button>
                  ))}
                </div>
              </div>

              <div className="m-field">
                <label>Sizes</label>
                <div className="options-flex">
                  {sizeOptions.map(s => (
                    <button key={s} type="button"
                      className={productData.sizes.includes(s) ? "chip active" : "chip"}
                      onClick={() => handleToggle('sizes', s)}>{s}</button>
                  ))}
                </div>
              </div>

              <div className="m-field">
                <label>Description</label>
                <textarea className="large-textarea" name="description" value={productData.description} onChange={handleChange}></textarea>
              </div>

              <div className="modal-buttons">
                <button type="button" className="btn-cancel" onClick={handleClose}>Cancel</button>
                <button type="submit" className="btn-save-final">Save Product</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage; 