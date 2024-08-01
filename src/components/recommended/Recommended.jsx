import recommendedStyle from './recommended.module.css';
import item1 from '../../assets/item1.svg';
import item2 from '../../assets/item2.svg';
import item3 from '../../assets/item3.svg';
import AddTocartimage from '../../assets/addTocart.svg';
import arrowButton from '../../assets/arrowbutton.svg';
function Recommended(){
    const recommendedItemsArray = [
        {
            coffeeName : "Arabica",
            flavorName : "Dark Roast",
            image : item1
        },
        {
            coffeeName : "House Blend",
            flavorName : "Dark Roast",
            image : item2
        },
        {
            coffeeName : "Robusta",
            flavorName : "Dark Roast",
            image : item3
        }
    ];

    return(
        <>
        <section id='product' className={recommendedStyle.recommended}>
            <h2>Recommended</h2>
            <div className={recommendedStyle.recommendation_container}>
                {
                    recommendedItemsArray.map((item,index) => (
                        <div key={index} className={recommendedStyle.recommended_item}>
                            <span className={recommendedStyle.information}>&#8505;</span>
                            <img className={recommendedStyle.coffeeImage} src={item.image} alt="item" />
                            <img className={recommendedStyle.addTocartimage} src={AddTocartimage} alt="Add to cart" />
                            <p><strong>{item.coffeeName}</strong>{item.flavorName}</p>
                        </div>
                    ))
                }
            </div>
            <div className={recommendedStyle.arrowButtons}>
                <img className={recommendedStyle.LeftArrowButton} src={arrowButton} alt="left-button" />
                <img className={recommendedStyle.RightArrowButton} src={arrowButton} alt="right-button" />
            </div>
        </section>
        </>
    );
}
export default Recommended;