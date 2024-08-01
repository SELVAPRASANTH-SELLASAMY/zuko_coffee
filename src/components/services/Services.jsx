import serviceStyle from './services.module.css';
import equipmentImage from '../../assets/equipment.svg';
import coffeeImage from '../../assets/type_of_coffee.svg';
import takeAWayImage from '../../assets/take_a_way.svg';
import beansVarientImage from '../../assets/beans_varient.svg';
import pastryImage from '../../assets/pastry.svg';
function Services(){
    const tileContents = [
        {
            id:1,
            image:equipmentImage,
            text:'Equipment'
        },
        {
            id:2,
            image:coffeeImage,
            text:'Type of Coffee'
        },
        {
            id:3,
            image:takeAWayImage,
            text:'Take a Way'
        },
        {
            id:4,
            image:beansVarientImage,
            text:'Beans Varient'
        },
        {
            id:5,
            image:pastryImage,
            text:'Pastry'
        },

    ]
    return(
        <>
        <section id='services' className={serviceStyle.services}>
            <h2>Services</h2>
            <div className={serviceStyle.service_tile_container}>
                {
                    tileContents.map((content)=>(
                        <div key={content.id} className={serviceStyle.service_tile}>
                            <img src={content.image} alt={content.text} />
                            <p>{content.text}</p>
                        </div>
                    ))
                }
            </div>
        </section>
        </>
    );
}
export default Services;