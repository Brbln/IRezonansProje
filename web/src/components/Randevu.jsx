// import React from 'react'

// const Randevu = () => {
//     return (
//         <><div className="randevu">
//             <div className="container">
//                 <h2>aslı</h2>
//             </div>
//         </div>

//         </>
//     )
// }

// export default Randevu
import React, { useState } from 'react';

const Randevu = () => {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        phone: '',
        text: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Burada form verilerini gönderebilirsiniz
        console.log(formData);
        // Formu gönderdikten sonra isteğe bağlı olarak formu sıfırlayabilirsiniz
        setFormData({
            name: '',
            surname: '',
            email: '',
            phone: '',
            text: '',
            date: ''
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
            <input type="text" name="surname" value={formData.surname} onChange={handleChange} placeholder="Surname" />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" />
            <textarea name="text" value={formData.text} onChange={handleChange} placeholder="Message"></textarea>
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Randevu;
