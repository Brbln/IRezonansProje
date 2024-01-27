import React from 'react'
import { Link } from 'react-router-dom'
import img from "../images/slider/2.jpg"
import img1 from "../images/slider/1.jpg"
import img3 from "../images/slider/3.jpg"

export const Services = () => {
    return (
        <>
        <div className="services container">
            <h1 className='header'>Hizmetlerimiz </h1>
            <div className="text parag">
                <div className="s_box">
                    <div className="s_row">
                        <img src={img} alt="" />
                        <h1>İştah Kapama </h1>
                        <p>
                            Zayıflama, sağlıklı bir yaşam tarzının ve vücut ağırlığının kontrol altında tutulmasının önemli
                            bir unsuru olarak karşımıza çıkar. Zayıflama, dengeli beslenme, düzenli egzersiz ve sağlıklı
                            alışkanlıkların bir kombinasyonunu içerir. Vücut ağırlığını kontrol etmek, genel sağlık durumunu
                            iyileştirebilir ve bir dizi olumlu etki yaratabilir
                        </p>
                        <Link to="/hizmetlerimiz/istah-kapama">
                        <button className='button'>Devamını Oku</button>
                        </Link>
                    </div>
                    <div className="s_row">
                        <img src={img1} alt="" />
                        <h1>Gıda Silme </h1>
                        <p>
                            Zayıflama, sağlıklı bir yaşam tarzının ve vücut ağırlığının kontrol altında tutulmasının önemli
                            bir unsuru olarak karşımıza çıkar. Zayıflama, dengeli beslenme, düzenli egzersiz ve sağlıklı
                            alışkanlıkların bir kombinasyonunu içerir. Vücut ağırlığını kontrol etmek, genel sağlık durumunu
                            iyileştirebilir ve bir dizi olumlu etki yaratabilir
                        </p>                        
                        <Link to="/hizmetlerimiz/gida-silme">
                        <button className='button'>Devamını Oku</button>
                        </Link>
                    </div>
                    <div className="s_row">
                        <img src={img3} alt="" />
                        <h1>Sigara Bırakma </h1>
                        <p>
                            Zayıflama, sağlıklı bir yaşam tarzının ve vücut ağırlığının kontrol altında tutulmasının önemli
                            bir unsuru olarak karşımıza çıkar. Zayıflama, dengeli beslenme, düzenli egzersiz ve sağlıklı
                            alışkanlıkların bir kombinasyonunu içerir. Vücut ağırlığını kontrol etmek, genel sağlık durumunu
                            iyileştirebilir ve bir dizi olumlu etki yaratabilir
                        </p>                        
                        <Link to="/hizmetlerimiz/sigara-birakma">
                        <button className='button'>Devamını Oku</button>
                        </Link>
                    </div>                    
                </div>
            </div>
        </div>
        </>
    )
}
export default Services