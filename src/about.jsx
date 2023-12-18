export default function About(props){
    const aboutRef = props.aboutRef
    return(
        <div className="about-section" id="about" ref={aboutRef}>
            <h1>Welcome To Easemobile Spa</h1>
            <p>The Easemobile Spa offers exceptional massages, facials, skin analysis virtual skin health consultation,
                pedicures, manicures, and waxing services delivered to you at your convinience. Empahsizing self has
                never been so accessible. We prioritize your well-being and have extended wellness services to your location,
                providing you with additional opportunities to improve, unwind, rejuvenate, and maintain your well-being whenever 
                and wherever you choose. 
            </p>
        </div>
    )
}