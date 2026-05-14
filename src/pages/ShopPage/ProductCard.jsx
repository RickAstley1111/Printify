import React from "react";
import "./ProductCard.css";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../LanguageContext";
import { translations } from "../../i18n";

// PART 1: Media (Image & Badge)
const CardMedia = ({ image, type, colors }) => (
  <div className="card_media">
    <img src={image} alt="Product" className="media_img" />
    <span className="type_badge_small">{type}</span>
    <div className="color_group">
      {colors.map((c, i) => (
        <span key={i} className="dot_mini" style={{ backgroundColor: c }} />
      ))}
    </div>
  </div>
);

// PART 2: Content (Title & Description)
const CardContent = ({ title, desc, sizes }) => (
  <div className="card_content">
    <div className="content_row">
      <h5 className="title_small">{title}</h5>
      <span className="size_meta_small">PLA</span>
    </div>
    <p className="desc_small">{desc}</p>
    <div className="tag_list">
      {sizes.map((s, i) => (
        <span key={i} className="tag_mini">{s}</span>
      ))}
    </div>
  </div>
);

// MAIN COMPONENT
const ProductCard = ({ product, isLoading }) => {
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const t = translations[lang];

  if (isLoading || !product) {
    return (
      <div className="compact_card loading_state">
        <div className="loading_label">{t.loading}</div>
      </div>
    );
  }

  return (
    <div className="compact_card" onClick={() => navigate(`/product/${product.id}`)}>
      <CardMedia
        image={product.images[0]}
        type={product.product_type}
        colors={product.colors}
      />

      <div className="card_body_wrapper">
        <CardContent
          title={product.text}
          desc={product.description}
          sizes={product.sizes}
        />

        <div className="card_footer_small">
          <span className="price_small">{product.price} {t.sum}</span>
          <button className="btn_add_small" onClick={(e) => e.stopPropagation()}>
            {t.addToCard}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;