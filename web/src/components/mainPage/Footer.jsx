import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      &copy; 2024 My Website
    </footer>
  );
};

const footerStyle = {
  backgroundColor: '#333',
  color: 'white',
  textAlign: 'center',
  padding: '10px',
  bottom: '0',
  width: '100%',
};

export default Footer;
