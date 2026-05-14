import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import abr from '../../assets/Abror.png';
import Header from '../../components/Header/Header';
import LatestActivities from '../../components/LatestActivities/LatestActivities';
import EmptyState from '../../components/EmptyState';
import axios from 'axios';
import { Modal } from '@mui/material';
import { useLanguage } from '../../LanguageContext';
import { translations } from '../../i18n';

const ProfilePage = () => {
  const { lang } = useLanguage();
  const t = translations[lang];
  const [open, setOpen] = useState(false);
  const [profilePic, setProfilePic] = useState(abr);

  const handleProfilePicChange = (e) => {
    const file = e.target.files?.[0];
    if (file) setProfilePic(URL.createObjectURL(file));
  };

  const initialFormState = {
    text: "",
    description: "",
    product_type: "",
    price: 0,
    plastic_type: [],
    rating: 0,
    colors: [],
    images: [],
    sizes: [],
  };

  const [productData, setProductData] = useState(initialFormState);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [products, setProducts] = useState([]);

  const colorOptions = ['green', 'yellow', 'blue', 'cyan', 'red', 'purple'];
  const sizeOptions = ['20x20x20cm', '10x10x10cm', '15x10x30cm'];
  const typeOptions = ['3d printed', '3d model', 'custom 3d print', 'custom 3d model'];
  const plasticOptions = ['PLA', 'TPU', 'ABS', 'PETG', 'Nylon', 'Carbon Fiber'];

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
        ? prev[key].filter(i => i !== value)
        : [...prev[key], value]
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

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    const finalObject = {
      ...productData,
      rating: String(productData.rating),
      product_type: productData.product_type.toString()
    };
    try {
      await axios.post("http://localhost:5050/api/products", finalObject);
      setOpen(false);
      setProductData(initialFormState);
      setImagePreviews([]);
    } catch (err) {
      console.error(err);
    }
  };

  const handleClose = () => {
    setOpen(false);
    imagePreviews.forEach(url => URL.revokeObjectURL(url));
  };

  return (
    <div className='fullpage'>
      <div className="container"><Header /></div>
      <div className="container">
        <div className="profile-dashboard">

          <section className="settings-section">
            <h2 className="section-title">{t.profileSettings} <span className="text-lime">{t.settings}</span></h2>
            <div className="settings-grid">
              <div className="profile-pic-side">
                <img src={profilePic} alt="Profile" className="profile-img" />
                <label className="btn-change">
                  {t.changePhoto}
                  <input type="file" accept="image/*" onChange={handleProfilePicChange} className="hide-input" />
                </label>
                <button className="btn-save-main">{t.saveAll}</button>
              </div>

              <div className="form-side">
                <div className="form-columns">
                  <div className="inputs-col">
                    <div className="input-group">
                      <label>{t.firstName}</label>
                      <input type="text" placeholder={t.firstName} />
                    </div>
                    <div className="input-group">
                      <label className='label-two'>{t.lastName}</label>
                      <input type="text" placeholder={t.lastName} />
                    </div>
                  </div>
                  <div className="bio-col">
                    <div className="input-group stretch-height">
                      <label className='label-two'>{t.bio}</label>
                      <textarea className="large-textarea" placeholder={t.describeStudio}></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="add-product-banner">
              <div className="banner-text">
                <h3>{t.addOwnProduct}</h3>
                <p>{t.addProductWarning}</p>
              </div>
              <button className="btn-open-modal" onClick={() => setOpen(true)}>{t.addProduct}</button>
            </div>
          </section>

          <section className="products-section">
            <h2 className="section-title center">{t.myProducts} <span className="text-lime">{t.productsLabel}</span></h2>
            {products.length > 0 ? (
              <div className="product-grid stagger">
                {products.map((item, idx) => (
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
                        <span className="price-tag-sample">{item.price} {t.sum}</span>
                        <button className="btn-add-to-card">{t.addToCard}</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState title={t.noProductsFound} />
            )}
          </section>

          <div className='graph-section'>
            <LatestActivities />
          </div>
        </div>
      </div>

      <Modal open={open} onClose={handleClose} className="mui-modal-wrapper">
        <div className='modal-container'>
          <div className="modal-content">
            <div className="modal-top">
              <h2>{t.newProduct}</h2>
              <button type="button" className="btn-close" onClick={handleClose}>&times;</button>
            </div>
            <form onSubmit={handleSaveProduct}>
              <div className="m-field">
                <label>{t.uploadImages}</label>
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
                <label>{t.productName}</label>
                <input type="text" name="text" required value={productData.text} onChange={handleChange} />
              </div>
              <div className="m-field">
                <label>{t.priceUZS}</label>
                <input type="number" name="price" required value={productData.price} onChange={handleChange} />
              </div>
              <div className="m-field">
                <label>{t.type}</label>
                <div className="options-flex">
                  {typeOptions.map(t => (
                    <button key={t} type="button" className={productData.product_type === t ? "chip active" : "chip"} onClick={() => setProductData({ ...productData, product_type: t })}>{t}</button>
                  ))}
                </div>
              </div>
              <div className="m-field">
                <label>{t.plasticTypes}</label>
                <div className="options-flex">
                  {plasticOptions.map(p => (
                    <button key={p} type="button" className={productData.plastic_type.includes(p) ? "chip active" : "chip"} onClick={() => handleToggle('plastic_type', p)}>{p}</button>
                  ))}
                </div>
              </div>
              <div className="m-field">
                <label>{t.colors}</label>
                <div className="options-flex">
                  {colorOptions.map(c => (
                    <button key={c} type="button" className={productData.colors.includes(c) ? "chip active" : "chip"} onClick={() => handleToggle('colors', c)}>{c}</button>
                  ))}
                </div>
              </div>
              <div className="m-field">
                <label>{t.sizes}</label>
                <div className="options-flex">
                  {sizeOptions.map(s => (
                    <button key={s} type="button" className={productData.sizes.includes(s) ? "chip active" : "chip"} onClick={() => handleToggle('sizes', s)}>{s}</button>
                  ))}
                </div>
              </div>
              <div className="m-field">
                <label>{t.description}</label>
                <textarea className="large-textarea" name="description" value={productData.description} onChange={handleChange}></textarea>
              </div>
              <div className="modal-buttons">
                <button type="button" className="btn-cancel" onClick={handleClose}>{t.cancel}</button>
                <button type="submit" className="btn-save-final">{t.saveProduct}</button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ProfilePage;