import React, { useState } from 'react';
import img from "../images/slider/t.jpeg";

const Header2 = ({ customHeader }) => {

  return (
    <>
      <div className="nav">
        <img className='img' src={img} alt="" />
        <h2>{customHeader || 'İletişim'}</h2>
      </div>
    </>
  );
}

export default Header2;