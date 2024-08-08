import reviewStyle from './reviews.module.css';
import avatar1 from '../../assets/avatar1.svg';
import avatar2 from '../../assets/avatar2.svg';
import avatar3 from '../../assets/avatar3.svg';
import avatar4 from '../../assets/png/scarlet.jpg';
import avatar5 from '../../assets/png/steve_rogers.jpg';
import avatar6 from '../../assets/png/chris_hamsworth.jpg';
import ReviewTile from './ReviewTile';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import './customswiper.css';
import 'swiper/css/pagination';
function Reviews(){
    const customerReviewArray = [
        {
            clientName : "Taylor",
            rating : "4",
            feedback : "I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.",
            image : avatar1
        },
        {
            clientName : "Steve Rogers",
            rating : "5",
            feedback : "I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.",
            image : avatar5
        },
        {
            clientName : "Wanda",
            rating : "4",
            feedback : "I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.",
            image : avatar3
        },
        {
            clientName : "Chris Evons",
            rating : "4",
            feedback : "I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.",
            image : avatar2
        },
        {
            clientName : "Scarlet Johnson",
            rating : "5",
            feedback : "I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.",
            image : avatar4
        },
        {
            clientName : "Chris Hamsworth",
            rating : "4",
            feedback : "I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.",
            image : avatar6
        }
    ];

    return(
        <>
        <section className={reviewStyle.reviews}>
            <h2>Customer Review</h2>
            <Swiper
                modules={[Navigation,Pagination,Autoplay]}
                spaceBetween={50}
                slidesPerView={'auto'}
                navigation
                pagination={{ clickable: false }}
                autoplay
                loop
                centeredSlides
            >
                {
                    customerReviewArray.map((info,index)=>(
                        <SwiperSlide key={index}>
                            <ReviewTile customerReviewArray={customerReviewArray[index]}/>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </section>
        </>
    );
}
export default Reviews;