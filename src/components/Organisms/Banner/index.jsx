import React from "react";

const Banner = ({ color, image, title, subtitle }) => {
  return (
    <div className={`main-banner img-container ${color}`}>
      <div className="ed-grid">
        <div>
          <img src={image.src} alt={image.alt} className="main-banner__img" />
          <div className="main-banner__data s-center ">
            <h1 className="main-banner__title">{title}</h1>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
