import recommendedStyle from './recommended.module.css';
import item1 from '../../assets/item1.svg';
import item2 from '../../assets/item2.svg';
import item3 from '../../assets/item3.svg';
import AddTocartimage from '../../assets/addTocart.svg';
import arrowButton from '../../assets/arrowbutton.svg';
import { useEffect, useRef, useState } from 'react';
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
        },
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

    const recommededItem = useRef();
    const ItemsContainer = useRef();
    const leftscrollButton = useRef();
    const rightscrollButton = useRef();
    const maxScrollCount = useRef(0);
    const [scrollCount,setScrollCount] = useState(0);

    useEffect(()=>{
        const maxScrollRight = Math.floor(ItemsContainer.current.offsetWidth / (recommededItem.current.offsetWidth + Number(getComputedStyle(ItemsContainer.current).gap.slice(0,-2))));
        maxScrollCount.current = recommendedItemsArray.length - (maxScrollRight ? maxScrollRight : 1);
    },[recommendedItemsArray.length]);

    const scrollLeft = () => {
        const itemWidth = recommededItem.current.offsetWidth;
        ItemsContainer.current.scrollBy({left:itemWidth,behavior:"smooth"});
        setScrollCount(scrollCount+1);
    }

    const scrollRight = () => {
        const itemWidth = -recommededItem.current.offsetWidth;
        ItemsContainer.current.scrollBy({left:itemWidth,behavior:"smooth"});
        setScrollCount(scrollCount-1);
    }

    useEffect(()=>{
        leftscrollButton.current.style.display = scrollCount ? 'flex' : 'none';
        rightscrollButton.current.style.display = scrollCount >= maxScrollCount.current ? 'none' : 'flex';
    },[scrollCount]);

    return(
        <>
        <section id='product' className={recommendedStyle.recommended}>
            <h2>Recommended</h2>
            <div ref={ItemsContainer} className={recommendedStyle.recommendation_container}>
                {
                    recommendedItemsArray.map((item,index) => (
                        <div ref={recommededItem} key={index} className={recommendedStyle.recommended_item}>
                            <span className={recommendedStyle.information}>&#8505;</span>
                            <img className={recommendedStyle.coffeeImage} src={item.image} alt="item" />
                            <img className={recommendedStyle.addTocartimage} src={AddTocartimage} alt="Add to cart" />
                            <p><strong>{item.coffeeName}</strong>{item.flavorName}</p>
                        </div>
                    ))
                }
            </div>
            <div className={recommendedStyle.arrowButtons}>
                <img ref={leftscrollButton} onClick={scrollRight} className={recommendedStyle.LeftArrowButton} src={arrowButton} alt="left-button" />
                <img ref={rightscrollButton} onClick={scrollLeft} className={recommendedStyle.RightArrowButton} src={arrowButton} alt="right-button" />
            </div>
        </section>
        </>
    );
}
export default Recommended;