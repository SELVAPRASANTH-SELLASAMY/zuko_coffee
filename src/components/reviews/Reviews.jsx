import reviewStyle from './reviews.module.css';
import avatar1 from '../../assets/avatar1.svg';
import avatar2 from '../../assets/avatar2.svg';
import avatar3 from '../../assets/avatar3.svg';
import ReviewTile from './ReviewTile';
import navArrow from '../../assets/rightArrow.svg';
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

    return(
        <>
        <section className={reviewStyle.reviews}>
            <h2>Customer Review</h2>
            <img className={reviewStyle.leftArrow} src={navArrow} alt="leftArrow" />
            <img className={reviewStyle.rightArrow} src={navArrow} alt="rightArrow" />
            <div className={reviewStyle.reviewContainer}>
                {
                    customerReviewArray.map((info,index)=>(
                        <ReviewTile key={index} customerReviewArray={customerReviewArray[index]}/>
                    ))
                }
            </div>
        </section>
        </>
    );
}
export default Reviews;