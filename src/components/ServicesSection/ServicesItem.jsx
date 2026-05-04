import { useState } from "react";
import PlusIcon from "../../assets/Add.png";

export default function ServiceItem({ service }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="service-item">
      <button
        className="service-item_btn"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="service-item_left">
          <img className="service-item_img" src={service.image} alt="" />
          <p className="service-item_title">{service.title}</p>
        </div>

        <img
          src={PlusIcon}
          alt=""
          className={`service-item_icon ${open ? "open" : ""}`}
        />
      </button>

      <div
        className={`service-item_body ${
          open ? "service-item_body--open" : ""
        }`}
      >
        <p className="service-item_desc">{service.description}</p>
      </div>
    </div>
  );
}