
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import CarouselCard from '../CarouselCard/CarouselCard'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"

import "./SwiperStyles.css";


// import Swiper core and required modules
import SwiperCore, {
    Pagination, Navigation
} from 'swiper/core';
import { Container } from "@material-ui/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

export default function App() {

    return (
        <Container style={{ backgroundColor: "#EAEAEA", padding: '0' }} >
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                // slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    "clickable": true
                }}
                breakpoints={{
                    // when window width is >= 640px
                    768: {
                        slidesPerView: 2,

                    },
                    // when window width is >= 768px
                    992: {
                        slidesPerView: 3,

                    },
                }}
                // navigation={true}
                className="swiper-container">
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
                <SwiperSlide>
                    <CarouselCard />
                </SwiperSlide>
            </Swiper>
        </Container>
    )
}