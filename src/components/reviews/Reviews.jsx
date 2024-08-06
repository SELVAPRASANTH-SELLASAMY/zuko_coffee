import reviewStyle from './reviews.module.css';
import avatar1 from '../../assets/avatar1.svg';
import avatar2 from '../../assets/avatar2.svg';
import avatar3 from '../../assets/avatar3.svg';
import ReviewTile from './ReviewTile';
import navArrow from '../../assets/rightArrow.svg';
import { useEffect, useRef, useState } from 'react';
function Reviews(){
    const customerReviewArray = [
        {
            clientName : "Taylor",
            designation : "Student",
            rating : "4",
            feedback : "I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.",
            image : avatar1
        },
        {
            clientName : "Steve Rogers",
            designation : "Software Engineer",
            rating : "5",
            feedback : "I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.",
            image : avatar2
        },
        {
            clientName : "Wanda",
            designation : "Business Women",
            rating : "4",
            feedback : "I love spending my downtime in a cozy coffee shop, surrounded by the sweet aroma of freshly brewed drinks and pastries.",
            image : avatar3
        }
    ];

    const reviewContainer = useRef();
    const copy = customerReviewArray.copyWithin();
    customerReviewArray.push(...copy);

    const [scrollWidth,setScrollWidth] = useState(0);
    
    useEffect(()=>{
        if(scrollWidth){
            const gap = Number(getComputedStyle(reviewContainer.current).gap.slice(0,-2));
            var maxScroll = 0;
            const scroll = () => {
                if(maxScroll >= ((customerReviewArray.length / 2) * (scrollWidth + gap))){
                    reviewContainer.current.scrollTo({left:0,behavior:'instant'});
                    maxScroll = (scrollWidth+gap);
                }
                else{
                    maxScroll += (scrollWidth+gap);
                }
                reviewContainer.current.scrollBy({left:(scrollWidth+gap),behavior:'smooth'});
            }
            const interval = setInterval(scroll,[2500]);
            return () => clearInterval(interval);
        }
    },[scrollWidth,customerReviewArray.length]);

    return(
        <>
        <section className={reviewStyle.reviews}>
            <h2>Customer Review</h2>
            <img className={reviewStyle.leftArrow} src={navArrow} alt="leftArrow" />
            <img className={reviewStyle.rightArrow} src={navArrow} alt="rightArrow" />
            <div ref={reviewContainer} className={reviewStyle.reviewContainer}>
                {
                    customerReviewArray.map((info,index)=>(
                        <ReviewTile setScrollWidth={setScrollWidth} key={index} customerReviewArray={customerReviewArray[index]}/>
                    ))
                }
            </div>
        </section>
        </>
    );
}
export default Reviews;