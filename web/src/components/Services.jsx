import React from 'react'
import img from "./images/slider/2.jpg"

export const Services = () => {
    return (
        <><div className="services container">
            <h1 className='header'>Hizmetlerimiz </h1>
            <div className="text">
                <div className="parag">
                    <div className="s_box">
                        <img src={img} alt="" />
                        <p>
                            Zayıflama, sağlıklı bir yaşam tarzının ve vücut ağırlığının kontrol altında tutulmasının önemli
                            bir unsuru olarak karşımıza çıkar. Zayıflama, dengeli beslenme, düzenli egzersiz ve sağlıklı
                            alışkanlıkların bir kombinasyonunu içerir. Vücut ağırlığını kontrol etmek, genel sağlık durumunu
                            iyileştirebilir ve bir dizi olumlu etki yaratabilir.
                        </p>
                    </div>
                    <br/>
                    
                    {/* <div className="s_box parag">
                        <img src={img} alt="" />
                        <p>
                            Zayıflama, sağlıklı bir yaşam tarzının ve vücut ağırlığının kontrol altında tutulmasının önemli
                            bir unsuru olarak karşımıza çıkar. Zayıflama, dengeli beslenme, düzenli egzersiz ve sağlıklı
                            alışkanlıkların bir kombinasyonunu içerir. Vücut ağırlığını kontrol etmek, genel sağlık durumunu
                            iyileştirebilir ve bir dizi olumlu etki yaratabilir
                        </p>
                    </div> */}
                </div>
            </div>
        </div>
        </>
    )
}
export default Services