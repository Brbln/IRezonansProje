import React, { useState } from 'react';
import axios from "axios";
import "./style.css";

const Randevu = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        text: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/randevus/create', formData);
            console.log(response.data); // Sunucudan gelen yanıtı konsola yazdır
            console.log(formData);
            // Formu gönderdikten sonra isteğe bağlı olarak formu sıfırlayabilirsiniz
            setFormData({
                name: '',
                surname: '',
                email: '',
                phone: '',
                text: ''
            });
        } catch (error) {
            console.error('Randevu oluşturulurken bir hata oluştu:', error);
        }
    };

    return (
        <>
            <div className="container">
                <div className="randevu">
                    <h2>Ön Randevu Alabilirsiniz</h2>
                    <p>Gönderdiğiniz iletişim bilgileri aracıılığıyla en kısa sürede sizlerle iletişime geçeceğiz.</p>
                    <form onSubmit={handleSubmit}>
                        <label>Adınız</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Adınız" />
                        <label>Soyadınız</label>
                        <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Soyadınız" />
                        <label>E-Posta</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-Posta Adresiniz" />
                        <label>Telefon</label>
                        <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" />
                        <label>Ekstra Mesajınız</label>

                        <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Mesajınız"></textarea>
                        <button type="submit">Gönder</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Randevu;
