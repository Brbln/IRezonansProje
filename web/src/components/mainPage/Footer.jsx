import React from 'react';
import img from "../images/logo.png"
import img2 from "../images/logo21.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    // <footer style={footerStyle}>
    //   &copy; 2024 My Website
    // </footer>
    <>
      <div className="footer">
        <div className="img container ">
          <img src={img} alt="" />
          {/* <img src={img2} alt="" /> */}
          <div className="end"> 
            <div className="icons">
              <i>
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </i>
              <i>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </i>
              <i>
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </i>
            </div>
            <p>&copy; 2024 İlkadım Rezonans & Zayıflama</p>
          </div>
        </div>
      </div>
    </>
  )
}


export default Footer;
