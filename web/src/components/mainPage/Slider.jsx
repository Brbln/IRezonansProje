import React,{useState} from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img from "../images/slider/2.jpg";
import img1 from "../images/slider/1.jpg";
import img2 from "../images/slider/3.jpg";

const Slider = () => {

  const [animate, setAnimate] = useState(false);

  const handleSlideChange = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 1000);   
  };

  return (
    <div className="slider">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        freeMode={true} 
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiper"
        onSlideChange={handleSlideChange}
      >
        <SwiperSlide>
          <div className="swiperSlide">
            <img src={img} alt="" />
            <div className={`sliderText ${animate ? 'fadeIn' : ''}`}>
              <h2>İlk Slayt Başlığı</h2>
              <p>Bu bir açıklama metni olabilir.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlide">
            <img src={img1} alt="" />
            <div className={`sliderText ${animate ? 'fadeIn' : ''}`}>
              <h2>İkinci Slayt Başlığı</h2>
              <p>Bu bir başka açıklama metni olabilir.</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlide">
              <img src={img2} alt="" />
            <div className={`sliderText ${animate ? 'fadeIn' : ''}`}>
              <h2>Üçüncü Slayt Başlığı</h2>
              <p>Bu da bir diğer açıklama metni olabilir.</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
