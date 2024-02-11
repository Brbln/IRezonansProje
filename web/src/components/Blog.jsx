import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header2 from './mainPage/Header2';
import img from './images/slider/il.jpg';
import Footer from './footer/Footer';
import './style.css';
import Randevu from './Randevu';

const Blog = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get("/api/videos/")
        .then(response=>{   
            console.log(response.data);
            setItems(response.date);
        })
            // .then(response => setItems(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <>
            <Header2 customHeader={'Bizden Görüntüler'} />
            <div className="blog">
                <div className="container">
                    <h2 className='header'>Danışan Değerlendirmelerimiz</h2>
                    <ul>
                        {items.map(item => (
                            <li key={item._id}>
                                <h2>{item.vidName} asli</h2>
                                <p>{item.vidLink}</p>
                            </li>
                        ))}
                    </ul>
                    <img src={img} alt="" />
                </div>
            </div>
            <Randevu/>
            <Footer />
        </>
    );
};

export default Blog;
