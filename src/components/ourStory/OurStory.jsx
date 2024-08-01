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

    return(
        <>
        <section id='home' className={ourStoryStyle.OurStory}>
            <div id='moreContentsContainer' className={ourStoryStyle.storyContainer}>
                {
                    contentArray.map((obj)=>(
                        <StoryFrame key={obj.id} obj={obj}/>
                    ))
                }
            </div>
        </section>
        </>
    );
}
export default OurStory;