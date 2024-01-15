// Head.js
import React from "react";

const Head = () => {
  const whatsappNumber = "+905539879830";
  const email = "info@example.com";

  const handleWhatsappClick = () => {
    window.location.href = `https://wa.me/${whatsappNumber}`;
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <>
      <section className='head'>
        <div className='container d_flex'>
          <i className='fa fa-phone' onClick={handleWhatsappClick}>
            <label>+90 (530) 893 9288</label>
          </i>
          <i className='fas fa-envelope' onClick={handleEmailClick}>
            <label>{email}</label>
          </i>
        </div>
      </section>
    </>
  );
};

export default Head;
