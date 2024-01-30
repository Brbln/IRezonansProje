import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="cow">
          <br />
        </div>        
        <div className="footlist">
          <ul>
            <li>
              <Link to='/'>ANASAYFA</Link>
            </li>
            <li>
              <Link to='/hakkimizda/'>HAKKIMIZDA</Link>
            </li>
            <li>
              <Link to='/hizmetlerimiz/'>HİZMETLERİMİZ</Link>
            </li>
            <li>
              <Link to='/Blog/'>BİZDEN GÖRÜNTÜLER</Link>
            </li>
            <li>
              <Link to='/iletisim/'>İLETİŞİM</Link>
            </li>
          </ul>
        </div>
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
    </>
  )
}
export default Footer;
