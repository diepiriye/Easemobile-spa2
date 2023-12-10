import { useState } from "react"
import React, { useRef } from 'react'
import emailjs from "emailjs-com"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
//import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Isabella from '/images/isabella.jpg';
import Emily from '/images/emily.jpg';
import whiteBack from '/images/whitePic.png';
//import Navigate from './navigations.jsx'



export default function Book(props){
    const bookRef = props.bookRef
    const [formInfo, setFormInfo] = useState(
        {name: '', email: '', phoneNumber: '', message:''}
    )
    const form = useRef();
    
    console.log(formInfo)

    function handleChange(e){
        setFormInfo(formInfo =>{
            return{...formInfo, [e.target.name]: e.target.value,}
        })
    }
    function handleReset(){
        setFormInfo({name: '', email: '', phoneNumber: '', message:''})
    }
    function sendMail(e){
        e.preventDefault();
    
        emailjs.sendForm('service_noc7mkr', 'template_jboy1z8', form.current, 'jicK3ER7wCIgP4A6P')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          handleReset()
      };
    
    return(
        <div className="book-flex" id="booknow" ref={bookRef}>
            <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            style={{maxWidth: "700px",
                    width: "100%",
                    height: "max-content",
                    background: "#FAF9F6", "--swiper-navigation-size": "25px",
                    "--swiper-navigation-color": "red",
                    //border:"1px solid black"
                }}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 7000}}
            autoHeight
            >
                <SwiperSlide>
                    <div className="testimony-container" style={{ height: "100%" }}>
                        <div className="testimony-writeup">
                            <p>I used to think skin-care doesn't work until i was referred to ease moibile Spa.</p>
                            <p>I am glad i gave it a shot, 6months in and my skin has never been healthier. </p>
                            <p>I'm loving the change and I'm greatful I gave it a shot</p>
                        </div>
                        <div className="testimony-flex">
                            <h4>~ Emily Wilson</h4>
                            <div className="test-image">
                                <img src={Emily} alt="" className="test-picture"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimony-container" style={{ height: "100%" }}>
                        <div className="testimony-writeup">
                            <p>Thank you so much for your skin-care advice, consulting with you was definitely worth it.</p>
                            <p>I currently do not have any active break-outs and they only happen once in a whie. </p>
                            <p>The cicaplast baume has healed my skin and the dark spots visible fading.</p>
                            <p>Also my skin is definitely healthier and keeps getting better.</p>
                            <p>Thanks you again.</p>
                        </div>
                        <div className="testimony-flex">
                            <h4>~ Chetachi</h4>
                            <div className="test-image">
                                <img src={whiteBack} alt="" className="test-picture"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="testimony-container" style={{ height: "100%" }}>
                        <div className="testimony-writeup">
                            <p>The massage session was really good to be honest, all i wanted to do after that was to eat and sleep.</p>
                            
                        </div>
                        <div className="testimony-flex">
                            <h4>~ Isabella Okparanma</h4>
                            <div className="test-image">
                                <img src={Isabella} alt="" className="test-picture"/>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="horizontal"></div>
            <div className="form">
                <form className="forms" ref={form} onSubmit={sendMail}>
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text" name="name" id="name" 
                        placeholder="Name" onChange={handleChange}
                        value={formInfo.name}
                        required
                    />
                    <label htmlFor="email">E-mail</label>
                    <input 
                        type="email" name="email" id="email" 
                        placeholder="E-mail" onChange={handleChange}
                        value={formInfo.email}
                        required
                    />
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                        type="tel" name="phoneNumber" id="phone-number" 
                        placeholder="Phone Number" onChange={handleChange}
                        value={formInfo.phoneNumber}
                        required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea 
                        name="message" id="message" cols="30" rows="10" 
                        placeholder="Message" onChange={handleChange}
                        value={formInfo.message}
                    />
                    <button className="btn">SEND</button>
                </form>
            </div>
        </div>
                
    )
}