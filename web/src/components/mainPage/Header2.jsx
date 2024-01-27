import React, { useState } from 'react';
import img from "../images/slider/12.jpg";

const Header2 = ({ customHeader,customImg }) => {
  const [imageSrc, setImageSrc] = useState(customImg || img);
  return (
    <>
      <div className="nav">
      <img className='img' src={imageSrc} alt="" />
        <h2>{customHeader || 'İletişim'}</h2>
      </div>
    </>
  );
}

export default Header2;