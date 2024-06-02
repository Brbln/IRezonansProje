import React from 'react'; 
import Header2 from './mainPage/Header2';
import img from './images/blog/foto1.jpg';
import img2 from './images/blog/foto2.jpg';
import img3 from './images/blog/foto3.jpg';
import img4 from './images/blog/foto4.jpg';
import img5 from './images/blog/foto5.jpg';
import Footer from './footer/Footer';
import './style.css';
import Randevu from './Randevu';


const Blog = () => {
    return (
        <>
            <Header2 customHeader={'Bizden Görüntüler'} />
            <div className="blog">
                <div className="container">
                    <h2 className='header'>Danışan Değerlendirmelerimiz</h2> 
                    <div className='gallery' >
                    <img className="blogImg" src={img} alt="" />
                    <img className="blogImg" src={img2} alt="" />
                    <img className="blogImg" src={img3} alt="" />
                    <img className="blogImg" src={img4} alt="" />
                    <img className="blogImg" src={img5} alt="" />
                    </div>
                </div>
            </div>
            <Randevu />
            <Footer />
        </>
    );
};

export default Blog;
