import blogStyle from './blog.module.css';
import BlogTile from './BlogTile';
import cupGroup from '../../assets/coffee_cup_groups.svg';
import ingredient from '../../assets/ingredient_group.svg';
import coffeeTypes from '../../assets/coffee_types.svg';
function Blog(){
    const blogContentArray = [
        {
            heading : "How to make a great coffee",
            content : "Making a cup of coffee doesn't have to be complicated. Start by gathering your supplies: coffee grounds, water, and a French press, mug or other vessel. Next, measure out 2 tablespoons of ground coffee per 8 ounces of water. If you're using a French press, pour the measured grounds into the bottom of the press followed by hot water (between 195-205 degrees Fahrenheit). Let sit for three minutes before gently pushing down on the filter to trap the grounds at the bottom; this will create an intense flavor with slightly heavier body than filtered methods. If you have neither a French press nor filter, just pour your measured grounds directly into a mug or vessel and top with piping hot water. Give it a stir and let it sit for 3-4 minutes before consuming--but don't leave it too long as this method won't produce quite as bold of a flavor as either filtering or pressing would!",
            image : cupGroup
        },
        {
            heading : "Why does caffeine make us stay awake?",
            content : "Caffeine works by blocking adenosine receptors in the brain, which facilitates energy production and makes us feel more alert. Caffeine also increases adrenaline levels, further boosting your energy and heart rate, as well as other hormones like dopamine that can make you feel more awake. The combination of these effects makes caffeine a stimulant that is all-too common in both food and drinks to give us an extra boost of energy when we need it most. It's no wonder why so many people rely on caffeinated beverages - it really can make us stay awake!",
            image : ingredient
        },
        {
            heading : "Different types of coffee Explained",
            content : "Coffee is a staple in the lives of many and comes in a variety of forms. Whether you prefer hot or iced, espresso-based or filter, you’re spoilt for choice. To help beginners navigate their first foray into the world of coffee, let’s breakdown some basic categories: Espresso is an especially intense type of brewed coffee made by forcing pressurized water through finely ground beans. It has a strong flavor and can be used to make all manner of delicious drinks like flat whites, cappuccinos and lattes. Filter coffee is made with a paper filter that holds back most grounds before allowing the liquid to drip down into your cup. Its taste is less intense than that of espresso but still robust enough to serve with milk or flavored syrups if desired. Cold brew on the other hand isn't actually brewed using heat but rather steeped in cold water overnight to produce a smooth yet sweet drink - great over ice! Finally there's nitro which takes cold brew and injects it (through nitrogen) with carbon dioxide for an even creamier texture and slightly sweet flavor profile. No matter what you choose, chances are you won't be disappointed!",
            image : coffeeTypes
        }
    ];

    return(
        <>
        <section className={blogStyle.blog}>
            <h2>Our Blog</h2>
            <div className={blogStyle.blogContainer}>
                {
                    blogContentArray.map((blogContent,index)=>(
                        <BlogTile key={index} heading={blogContent.heading} content={blogContent.content} image={blogContent.image}/>
                    ))
                }
            </div>
        </section>
        </>
    );
}
export default Blog;