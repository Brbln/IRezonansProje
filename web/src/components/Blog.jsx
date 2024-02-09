import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header2 from './mainPage/Header2';
import img from './images/slider/il.jpg';
import Footer from './footer/Footer';
import './style.css';

const Blog = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // API'nin doğru adresini kullandığınızdan emin olun
                const result = await axios.get('http://localhost:5001/api/videos');
                // Veriyi state'e ayarlayın
                setData(result.data);
            } catch (error) {
                console.error('Veri alınırken bir hata oluştu:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <Header2 customHeader={'Bizden Görüntüler'} />
            <div className="blog">
                <div className="container">
                    <h2 className='header'>Danışan Değerlendirmelerimiz</h2>
                    <ul>
                        
                        {data && data.map(item => (
                            <li key={item._id}>{item.name}</li>
                        ))}
                    </ul>
                    <img src={img} alt="" />
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blog;
