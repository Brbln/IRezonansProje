import React, { useState, useEffect } from 'react'; 
import Header2 from './mainPage/Header2';
import img from './images/slider/il.jpg';
import Footer from './footer/Footer';
import './style.css';
import Randevu from './Randevu';

const Blog = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("/api/videos/All")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setItems(data);
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
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
                                <h2>{item.vidName}</h2>
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
