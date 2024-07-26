import { useMemo, useRef } from 'react';
import reviewStyle from './reviews.module.css';
function ReviewTile({customerReviewArray}){
    const ratingContainer = useRef();
    const {rating} = customerReviewArray;
    const stars = useMemo(() => {
        const ratingStar = <span className={reviewStyle.star}>&#9733;</span>;
        const unRatingStar = <span className={reviewStyle.star}>&#9734;</span>;
        const rated = Array(Number(rating)).fill(ratingStar);
        const unRated = Array(5 - Number(rating)).fill(unRatingStar);
        return [...rated,...unRated];
    },[rating]);

    return(
        <>
        <div className={reviewStyle.reviewTile}>
            <img src={customerReviewArray.image} alt="avatar" />
            <p className={reviewStyle.name}>{customerReviewArray.clientName}</p>
            <p className={reviewStyle.designation}>{customerReviewArray.designation}</p>
            <p ref={ratingContainer} className={reviewStyle.rating}>{stars}</p>
            <p className={reviewStyle.feedback}>{customerReviewArray.feedback}</p>
        </div>
        </>
    );
}
export default ReviewTile;