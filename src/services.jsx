import massage from '/images/massage.jpeg';
import facials from '/images/facials2.jpg';
import wax from '/images/waxing.jpeg';
import consult from '/images/facials.mp4';
import pedicure from '/images/pedicure2.jpg';

export default function Service(props){
    const serviceRef = props.serviceRef
    return(
        <div className="services-container" id="service" ref={serviceRef}>
            <h1>Our Services</h1>
            <div className="sub-service">
                
                <div className="services-info message">
                    <div className="service-image">
                        <img src={massage} alt="" className='service-pic'/>
                    </div>
                    <div className="services-writeup">
                        <h2>Massage</h2>
                        <p>Restore balance to your body and mind with our relaxing/remedial massages</p>
                    </div>
                </div>
                <div className="services-info facials">
                    <div className="service-image">
                        <img src={facials} alt="" className='service-pic'/>
                    </div>
                    <div className="services-writeup">
                        <h2>Facials</h2>
                        <p>Refresh, nourish,invigorate and renew your skin to achieve a radiant and healthy glow</p>
                    </div>
                </div>
                <div className="services-info visual">
                    <div className="service-image">
                        <video  controls className='service-pic'>
                            <source src={consult} type="video/mp4"/>
                        </video>
                    </div>
                    <div className="services-writeup">
                        <h2>Vitual Skin Health Consultation</h2>
                        <p>Consult our Certified in-house aesthetician to discus any skin related issues you may have </p>
                    </div>
                </div>
                <div className="services-info waxing">
                    <div className="service-image">
                        <img src={wax} alt="" className='service-pic'/>
                    </div>
                    <div className="services-writeup">
                        <h2>Waxing</h2>
                        <p>Wave goodbye to the incovinience of shaving and enjoy smooth, silky skin through our quick and nearly painless waxing services</p>
                    </div>
                </div>
                <div className="services-info pedicure">
                    <div className="service-image">
                        <img src={pedicure} alt="" className='service-pic' />
                    </div>
                    <div className="services-writeup">
                        <h2>Pedicure & Manicure</h2>
                        <p>Discover the magic of top-tier nail care</p>
                    </div>
                </div>
            </div>

        </div>

    )
}