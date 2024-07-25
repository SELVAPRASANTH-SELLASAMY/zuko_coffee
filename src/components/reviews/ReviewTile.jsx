import reviewStyle from './reviews.module.css';
function ReviewTile({customerReviewArray}){
    return(
        <>
        <div className={reviewStyle.reviewTile}>
            <img src={customerReviewArray.image} alt="avatar" />
            <p className={reviewStyle.name}>{customerReviewArray.clientName}</p>
            <p className={reviewStyle.designation}>{customerReviewArray.designation}</p>
            <p className={reviewStyle.rating}>
                <span className={reviewStyle.star}>&#9733;</span>
                <span className={reviewStyle.star}>&#9733;</span>
                <span className={reviewStyle.star}>&#9733;</span>
                <span className={reviewStyle.star}>&#9733;</span>
                <span className={reviewStyle.star}>&#9734;</span>
            </p>
            <p className={reviewStyle.feedback}>{customerReviewArray.feedback}</p>
        </div>
        </>
    );
}
export default ReviewTile;