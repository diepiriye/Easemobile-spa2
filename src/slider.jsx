import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Picture1 from '/images/spa1.jpeg';
import Picture2 from '/images/spa-slider32.webp'
import Picture3  from '/images/spa-slider22.webp';



export default function Slider(){
    
    return(
        <Swiper
        modules={[Navigation, Pagination, Autoplay ]}
        style={{background: "black"}}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{ delay: 7000}}
        pagination={{ clickable: true }}
        >
            <SwiperSlide>
                {({ isActive }) => (
                    <div className={`picture-container ${isActive ? 'active' : 'not-active'}`}>
                        <img src={Picture1} alt="slider1" className="slide-pictures" />
                        {isActive && (
                        <div className="picture-message">
                            <h1>The Easemobile Spa </h1>
                            <p>A mobile-Spa that creates magical <span className="span-break">moment</span> </p>
                        </div>
                        )}
                    </div>
                )}
            
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <div className={`picture-container ${isActive ? 'active' : 'not-active'}`}>
                        <img src={Picture2} alt="slider1" className="slide-pictures" />
                        {isActive && (
                        <div className="picture-message">
                            <p className="after-one-second">Massage Therapy and stress <span className="span-break">management</span></p>
                        </div>
                        )}
                    </div>
                )}
            </SwiperSlide>
            <SwiperSlide>
                {({ isActive }) => (
                    <div className={`picture-container ${isActive ? 'active' : 'not-active'}`}>
                        <img src={Picture3} alt="slider1" className="slide-pictures" />
                        {isActive && (
                        <div className="picture-message">
                            <p className="after-one-second">Purest form of Self-care</p>
                        </div>
                        )}
                    </div>
                )}
            </SwiperSlide>
        </Swiper>
    )
}