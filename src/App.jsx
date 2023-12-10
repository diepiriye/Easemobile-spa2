import Navbar from './navbarrr.jsx'
import viteLogo from '/vite.svg'
import Slider from './slider.jsx'
import Services from './services.jsx'
import About from './about.jsx'
import Book from './booknow.jsx'
import Footer from './footer.jsx'
import {useRef} from "react"





function App() {
    const homeRef = useRef();
    const aboutRef = useRef();
    const serviceRef = useRef();
    const contactRef = useRef();
    const bookRef = useRef();

  return (
    <div className="App" id="home" ref={homeRef}>
      <Navbar
        homeRef={homeRef}
        aboutRef={aboutRef}
        serviceRef={serviceRef}
        contactRef={contactRef}
        bookRef={bookRef} 
      />
      <Slider />
      <About aboutRef={aboutRef}/>
      <Services serviceRef={serviceRef} />
      <Book bookRef={bookRef} />
      <Footer contactRef={contactRef} />
    </div>
  )
}

export default App
