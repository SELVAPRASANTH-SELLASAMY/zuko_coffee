import offerStyle from './offer.module.css';
import proefpacket from '../../assets/Proefpakket.svg';
function Offer(){
    return(
        <>
        <section className={offerStyle.offer}>
            <div className={offerStyle.offerInfo}>
                <h2 className={offerStyle.offertitle}>Offer</h2>
                <h3>Up To <span>50%</span> Off</h3>
                <p>At our cafe, we take pride in providing our customers with the best coffee around. Our carefully-selected coffees come from some of the most renowned coffee growing regions in the world, ensuring that each cup is unrivaled in flavor and freshness. </p>
                <img src={proefpacket} alt="proefpacket" />
                <button type='button'>Shop Now</button>
            </div>
        </section>
        </>
    );
}
export default Offer;