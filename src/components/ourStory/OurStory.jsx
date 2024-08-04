import { useEffect, useRef } from 'react';
import ourStoryStyle from './ourstory.module.css';
import StoryFrame from './StoryFrame';
function OurStory(){
    const contentArray = [
        {
            id:1,
            content:"Zuko is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!"
        },
        {
            id:2,
            content:"Zuko is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!"
        },
        {
            id:3,
            content:"Zuko is an online coffee store that offers the widest selection of specialty coffees and teas from around the world. From medium-dark roast single origin to flavored espresso beans, they offer a variety of ethically sourced products to tantalize any customer’s palate. For those looking for unique brewing equipment, Eliza also carries a full range of quality espresso makers, grinders, brewers, French presses and more. On top of all that, their baristas are highly trained professionals who know exactly how to make the perfect cup for each customer. Whether it's for home or business use, Eliza has you covered - all conveniently available at the click of a button!"
        }
    ];
    const pageIndicator = () => {
        const indicator = Array.from({length:contentArray.length},(_,index)=>(
            <div key={`page${index}`} className={ourStoryStyle.indicationCircle}></div>
        ));
        return [...indicator];
    }
    const storyContainer = useRef();
    const pagesContainer = useRef();
    useEffect(()=>{
        const storyContainerCopy = storyContainer.current;
        var currentPage = 0;
        const pages = pagesContainer.current.querySelectorAll('div');
        pages[0].classList.add(ourStoryStyle.pageActive);
        const handlePage = () => {
            const PageNumber = Math.floor(storyContainerCopy.scrollLeft / storyContainerCopy.offsetWidth);
            pages[currentPage].classList.remove(ourStoryStyle.pageActive);
            pages[PageNumber].classList.add(ourStoryStyle.pageActive);
            currentPage = PageNumber;
        }
        storyContainerCopy.addEventListener('scrollend',handlePage);
        return () => {
            storyContainerCopy.removeEventListener('scroll',handlePage);
        }
    },[]);
    return(
        <>
        <section id='home' className={ourStoryStyle.OurStory}>
            <div ref={storyContainer} className={ourStoryStyle.storyContainer}>
                {
                    contentArray.map((obj)=>(
                        <StoryFrame key={obj.id} obj={obj}/>
                    ))
                }
            </div>
            <div ref={pagesContainer} className={ourStoryStyle.pageIndicator}>{pageIndicator()}</div>
        </section>
        </>
    );
}
export default OurStory;