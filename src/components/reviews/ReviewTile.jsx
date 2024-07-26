import { useMemo } from 'react';
import reviewStyle from './reviews.module.css';
function ReviewTile({customerReviewArray}){
    const {rating} = customerReviewArray;
    const stars = useMemo(() => {
        const rated = Array.from({length:Number(rating)},(_,index)=>(
            <span key={`rated-${index}`} className={reviewStyle.star}>&#9733;</span>
        ));
        const unRated = Array.from({length:(5 - Number(rating))},(_,index)=>(
            <span key={`unrated-${index}`} className={reviewStyle.star}>&#9734;</span>
        ));
        return [...rated,...unRated];
    },[rating]);

    return(
        <>
        <div className={reviewStyle.reviewTile}>
            <img src={customerReviewArray.image} alt="avatar" />
            <p className={reviewStyle.name}>{customerReviewArray.clientName}</p>
            <p className={reviewStyle.designation}>{customerReviewArray.designation}</p>
            <p className={reviewStyle.rating}>{stars}</p>
            <p className={reviewStyle.feedback}>{customerReviewArray.feedback}</p>
        </div>
        </>
    );
}
export default ReviewTile;