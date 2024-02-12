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
        const isFormFilled = Object.values(formData).every(value => value !== '');

        if (!isFormFilled) {
            alert('Lütfen tüm alanları doldurun.');
            return;
        }
        try {
            const response = await axios.post('/api/randevus/create', formData);
            console.log(response.data);
            console.log(formData);
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
            <div className="randevu">
                <h2 className='header'>Ön Randevu Formu</h2>
                <div className="container bg-photo">
                    <div className="foto">
                    <div className="randhead">
                        <h2>Ön randevu Kaydı Yapabilirsiniz</h2>
                        <h1>Gönderdiğiniz iletişim bilgileri aracılığıyla en kısa sürede sizlerle iletişime geçeceğiz. Beklemede kalın.</h1>
                        <p>Gönderdiğiniz iletişim bilgileri aracılığıyla en kısa sürede sizlerle iletişime geçeceğiz.</p>
                        <p className='time'>Pzt - Cmt : 09:00 - 18:00 </p>
                        <p className='time'>Pazar : Kapalı</p>
                    </div>
                    <div className="rand">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col">
                                    <label>Adınız</label>
                                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Adınız" />
                                </div>
                                <div className="col">
                                    <label>Soyadınız</label>
                                    <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Soyadınız" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label>E-Posta</label>
                                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="E-Posta Adresiniz" />
                                </div>
                                <div className="col">
                                    <label>Telefon</label>
                                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" />
                                </div>
                            </div>
                            <label>Ekstra Mesajınız</label>
                            <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Mesajınız"></textarea>
                            <button type="submit">Gönder</button>
                        </form>
                    </div>
                </div>
            </div>
                    </div>
        </>
    );
};

export default Randevu;
