import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { BrowserRouter as Link } from 'react-router-dom';
import "./Footer.css";
const Footer = () => {
  const whatsappNumber = "+905308939288";
  const handleWhatsappClick = () => {
    window.location.href = `https://wa.me/${whatsappNumber}`;
  };
  const instaClick = () => {
    window.location.href = `https://www.instagram.com/ilkadim_zayiflama_rezonans/`;
  };
  return (
    <>
      <div className="footer">
        <div className="cow">
          <br/>
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
          </ul>
          <ul>
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
              <FontAwesomeIcon icon={faInstagram} size="2x" onClick={instaClick} />
            </i>
            <i>
              <FontAwesomeIcon icon={faWhatsapp} size="2x" onClick={handleWhatsappClick} />
            </i>
          </div>
          <p>&copy; 2024 İlkadım Rezonans & Zayıflama</p>
        </div>
      </div>
    </>
  )
}
export default Footer;
