import React, { useState } from "react";
import {  BrowserRouter as Router, Route, Link } from "react-router-dom"
import logo from "../images/log.png"
import './Header.css';

const Navbar = () => {
    const [MobileMenu, setMobileMenu] = useState(false)
    return (
        <>
            <header className="navbar">
                    <div className='width'>
                        <Link to="/">
                            <img src={logo} alt='' />
                        </Link>
                    </div>
                    <div className="navlink ">
                        <ul className={MobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} onClick={() => setMobileMenu(false)}>
                            <li>
                                <Link to='/'>ANASAYFA</Link>
                            </li>
                            <li>
                                <Link to='/hakkimizda/'>HAKKIMIZDA</Link>
                            </li>
                            <li>
                                <div className="dropdown">
                                <Link to='/hizmetlerimiz/'>HİZMETLERİMİZ <i className="fas fa-caret-down" /></Link>   
                                <div className="d_content">
                                    <Link to='/hizmetlerimiz/istah-kapama'> İştah Kapama</Link>
                                    <Link to='/hizmetlerimiz/gida-silme'>Gıda Silme</Link>
                                    <Link to='/hizmetlerimiz/sigara-birakma'>Sigara Bırakma</Link>
                                </div>
                                </div>
                                                             
                            </li>
                            <li>
                                <Link to='/Blog/'>BİZDEN GÖRÜNTÜLER</Link>
                            </li>
                            <li>
                                <Link to='/iletisim/'>İLETİŞİM</Link>
                            </li>
                        </ul>
                        <button className="toggle" onClick={() => setMobileMenu(!MobileMenu)}>
                            {
                                MobileMenu ? <i className="fas fa-times close home-bth"></i> :
                                    <i className="fas fa-bars open"></i>
                            }
                        </button>
                    </div>
            </header>
        </>
    )
}
export default Navbar