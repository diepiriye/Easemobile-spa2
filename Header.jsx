/* eslint-disable react/no-unescaped-entities */
// import FullLogo from '../../assets/media/images/renergy_1.png'
import { useEffect, useRef } from "react";
import contactBG from '../../assets/media/images/bgs/pexels-umair-lamjarred-16052944.jpg';

export default function Contact(){
    useEffect(() => {
        window.xuiScrollOnAnimation();
    })
    const name = useRef(null);
    const email = useRef(null);
    const subject = useRef(null);
    const message = useRef(null);
    const formData = {name: "", email: "", subject: "", message: ""};
    const onSubmitHandler = (event) => {
        event.preventDefault();
        formData.name = name.current.value;
        formData.email = email.current.value;
        formData.subject = subject.current.value;
        formData.message = message.current.value;
        window.open("mailto:mail@rsecng.co?subject="+ formData.subject +"&body="+ encodeURI(formData.message));
    }
    return(
        <>
            <section className="xui-container xui-pt-3 xui-lg-pt-3 xui-lg-pb-6 xui-pb-4 xui-bg-white" >
                <div className="xui-row">
                    <div className="xui-col-12 xui-lg-col-5 xui-lg-pr-1 xui-text-white xui-bdr-rad-1" xui-aos="fade-left" xui-aos-delay=".5" xui-aos-once="true" style={{"backgroundColor": "var(--black)"}}>
                       <div className="xui-p-2">
                            {/* <img className='xui-img-150 xui-mb-1' src={FullLogo} alt='brand full logo' /> */}
                            <h1 className="xui-font-sz-150 xui-lg-font-sz-200 xui-w-fluid-100 xui-lg-w-fluid-90 swiper-heading" style={{"margin": "0"}}>You are one step away from reliable, clean energy.</h1>
                            <p className="xui-font-sz-90 xui-opacity-6 xui-line-height-1-half xui-mt-1 xui-w-fluid-100 xui-lg-w-fluid-90">Tell us what you need and we'll get you set up and enjoying constant power in under 48 hours.</p>

                            <form className="xui-form" onSubmit={onSubmitHandler}>
                                <div className="xui-form-box">
                                    <label>Full Name</label>
                                    <input type="text" ref={name} id="name" className="" required/>
                                </div>
                                <div className="xui-form-box">
                                    <label>Email Address</label>
                                    <input type="email" ref={email} id="name" className="" required/>
                                </div>
                                <div className="xui-form-box">
                                    <label>Subject</label>
                                    <input type="text" ref={subject} id="name" className="" required/>
                                </div>
                                <div className="xui-form-box">
                                    <label>Message</label>
                                    <textarea name="" ref={message} id="" className="" required></textarea>
                                </div>
                                <div className="xui-form-box">
                                <button type="submit" className="xui-btn-block xui-text-white xui-font-w-bold xui-mt-2" style={{"backgroundColor": "var(--orange)"}}>Get started</button>
                                </div>
                            </form>
                       </div>
                    </div>
                    <div className="xui-col-12 xui-lg-col-7 xui-pl-2 xui-lg-d-block xui-d-none" xui-aos="fade-down" xui-aos-delay=".8" xui-aos-once="true">
                    
                        <div className="xui-bg-pos-center-center xui-bg-sz-cover xui-h-fluid-100 xui-bdr-rad-1" style={{'backgroundImage': 'url("'+ contactBG +'")'}}>
                            <div className="xui-overlay xui-bdr-rad-1 xui-pb-5 xui-px-2 xui-h-fluid-100 xui-d-flex xui-flex-ai-flex-end">
                                <div>
                                    <h1 className="xui-font-sz-150 xui-lg-font-sz-200 xui-w-fluid-100 xui-lg-w-fluid-90 swiper-heading" style={{"margin": "0"}}>"Solar has everything we need on one platform. Now you can just focus on growing your business."</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}