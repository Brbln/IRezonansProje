import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/log.png";
import './Header.css';

const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false);
    const [showServices, setShowServices] = useState(false);
    const handleLinkClick = () => {
        if (MobileMenu) {
            setMobileMenu(false);
        }
    };

    return (
        <>
            <header className="navbar">
                <div className='width'>
                    <Link to="/" onClick={handleLinkClick}>
                        <img src={logo} alt='' />
                    </Link>
                </div>
                <div className={`navlink ${MobileMenu ? "show" : ""}`}>
                    <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                        <i className="fas fa-times"></i>
                    </button>
                    <ul className="link f_flex ">
                        <li>
                            <Link to='/' onClick={handleLinkClick}>ANASAYFA</Link>
                        </li>
                        <li>
                            <Link to='/hakkimizda/' onClick={handleLinkClick}>HAKKIMIZDA</Link>
                        </li>
                        <li>
                            <div className="dropdown">
                                <Link to='/hizmetlerimiz/' onClick={handleLinkClick}>HİZMETLERİMİZ <i className="fas fa-caret-down" /></Link>
                                <div className="d_content">
                                    <Link to='/hizmetlerimiz/istah-kapama' onClick={handleLinkClick}>İştah Kapama</Link>
                                    <Link to='/hizmetlerimiz/gida-silme' onClick={handleLinkClick}>Gıda Silme</Link>
                                    <Link to='/hizmetlerimiz/bagimlilik-terapisi' onClick={handleLinkClick}>Bağımlılık Terapisi</Link>
                                </div>
                            </div>
                            <div className="btnHiz">
                                <button className="hzmBtn" onClick={() => setShowServices(!showServices)}>
                                    <Link to='/hizmetlerimiz'>HİZMETLERİMİZ <i className="fas fa-caret-down" /></Link>
                                </button>
                                {showServices && (
                                    <ul className="d_content">
                                        <li><Link to='/hizmetlerimiz/istah-kapama' onClick={handleLinkClick}>İştah Kapama</Link></li>
                                        <li><Link to='/hizmetlerimiz/gida-silme' onClick={handleLinkClick}>Gıda Silme</Link></li>
                                        <li><Link to='/hizmetlerimiz/bagimlilik-terapisi' onClick={handleLinkClick}>Bağımlılık Terapisi</Link></li>
                                    </ul>
                                )}
                            </div>
                        </li>
                        <li>
                            <Link to='/Blog/' onClick={handleLinkClick}>BİZDEN GÖRÜNTÜLER</Link>
                        </li>
                        <li>
                            <Link to='/iletisim/' onClick={handleLinkClick}>İLETİŞİM</Link>
                        </li>
                    </ul>
                </div>

                <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                    <i className="fas fa-bars"></i>
                </button>
            </header>
        </>
    );
};

export default Navbar;
