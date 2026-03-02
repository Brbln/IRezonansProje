import   { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import img from "../images/img/gid.jpg";
import img1 from "../images/img/istt.png";
import img2 from "../images/img/bag1.jpg";

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
            <img src={img1} alt="" />
            <div className={`sliderText ${animate ? 'fadeIn' : ''}`}>
              <h2>İştah Kapama</h2>
              <p>İştah Kontrolünüzü Sağlayabilirsiniz!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlide">
            <img src={img} alt="" />
            <div className={`sliderText ${animate ? 'fadeIn' : ''}`}>
              <h2>Gıda Silme</h2>
              <p> Gıda Silme ile Yeninen Başlayın!</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiperSlide">
            <img src={img2} alt="" />
            <div className={`sliderText ${animate ? 'fadeIn' : ''}`}>
              <h2>Bağımlılık Terapisi</h2>
              <p>Bağımlılıklarınızı Geride Bırakabilirsiniz!</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
