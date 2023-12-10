import {useSwiper} from 'swiper/react';

export default function Navigations(){
    const swiper = useSwiper();
    return(
        <div className="navigate">
            <div className="navigate-flex">
                <h2 onClick={() => swiper.slidePrev()}><i class="fa-solid fa-angle-left"></i></h2>
                <h2 onClick={() => swiper.slideNext()}><i class="fa-solid fa-angle-right"></i></h2>
            </div>
        </div>
    )
}