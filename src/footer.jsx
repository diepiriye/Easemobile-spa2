import Logo from '/images/logo.jpg'

export default function Footer(props){
    const contactRef = props.contactRef
    return(
        <div className="footer" id="contact" ref={contactRef}>
            <div className="footer-flex">
                <div className="footer-logo">
                    <div className="footer-image">
                        <img src={Logo} alt="" className="footer-pic"/>
                    </div>
                    <p>The Easemobilespa</p>
                </div>
                <div className="footer-contact">
                    <div className="email">
                        <p ><a href="mailto: d.easemobilespa@gmail.com" traget="_blank"><i className="fa-solid fa-envelope"></i></a></p>
                        <p ><a href="mailto: d.easemobilespa@gmail.com" traget="_blank">de.easemobilespa@gmail.com</a></p>
                    </div>
                    <div className="phone">
                        <p><a href="tel:+2349021932024"><em><i className="fa-solid fa-phone"></i></em></a></p>
                        <p><a href="tel:+2349021932024">+234-902-193-2024</a></p>
                    </div>
                </div>
                <div className="footer-socials">
                    <div className="socials">
                        <p><a href="https://instagram.com/easemobilespa?igshid=OGQ5ZDc2ODk2ZA==" target="_blank"><i className="fa-brands fa-instagram"></i></a></p>
                        <p><a href="https://instagram.com/easemobilespa?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">Instagram</a></p>
                    </div>
                    <div className="socials">
                        <p><a href="https://www.tiktok.com/@easemobilespa?_t=8h1VwkpA77O&_r=1" target="_blank"><i className="fa-brands fa-tiktok"></i></a></p>
                        <p><a href="https://www.tiktok.com/@easemobilespa?_t=8h1VwkpA77O&_r=1" target="_blank">tiktok</a></p>
                    </div>

                </div>
            </div>
            <div className="copy">
                <p>CopyRight <small><i className="fa-regular fa-copyright"></i></small>2023 Easemobile Spa. All Right Reserved</p>
            </div>
        </div>
        
    )
}