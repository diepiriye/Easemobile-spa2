import {useRef} from "react"
import Logo from '/images/logo.jpg'
export default function Navbar(props){
    const homeRef = props.homeRef
    const aboutRef = props.aboutRef
    const serviceRef = props.serviceRef
    const contactRef = props.contactRef
    const bookRef  = props.bookRef

    function NavigateTo(ref) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        close();
      }

    const navMenu = useRef()
    function handbugger(){
        navMenu.current.classList.toggle("show")
    }
    function close(){
        navMenu.current.classList.remove("show")
    }
    return(
        <div className="navbar">
            <h2 className="whatsapp">
                <a href="whatsapp://send?phone=+2349021932024" target="_blank" rel="noopener noreferrer" title="Chat with us on WhatsApp">
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </h2>
            <div className="logo">
                <a href="#home" onClick={() => NavigateTo(homeRef)}>
                    <img src={Logo} alt="logo" className="logo-image" />
                </a>
            </div>
            <div className="book-now">
                <h1><a href="#booknow" onClick={() => NavigateTo(bookRef)}>BOOk NOW</a></h1>
            </div>
            <div className="nav-menu open" ref={navMenu}>
                <ul>
                    <li><a href="#home" onClick={() => NavigateTo(homeRef)}>Home</a></li>
                    <li><a href="#about" onClick={() => NavigateTo(aboutRef)}>About</a></li>
                    <li><a href="#service" onClick={() => NavigateTo(serviceRef)}>Services</a></li>
                    <li><a href="#contact" onClick={() => NavigateTo(contactRef)}>Contact</a></li>
                </ul>
                <h2 className="close" onClick={close}><i className="fa-solid fa-xmark"></i></h2>
            </div>
            
            <h2 className="toggle" onClick={handbugger}><i className="fa-solid fa-bars"></i></h2>   

        </div>
    )
}