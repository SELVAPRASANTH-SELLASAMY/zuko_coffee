import heroStyle from './hero.module.css';
import cupImage from '../../assets/Cup1.svg';
import motorcyleImage from '../../assets/motorcycle.svg';
import coffeeCup from '../../assets/coffee_cup.svg';
import { useEffect, useRef } from 'react';
function Hero(){
    const heroCup = useRef();
    const heroStyleRoot = useRef();
    useEffect(()=>{
        const navBarWidth = document.querySelector('body').getAttribute('style').slice(-3)+"px";
        heroStyleRoot.current.style.background = `linear-gradient(to right, transparent calc(100% - ${navBarWidth}),#7C573C ${navBarWidth})`;
    },[]);
    return(
        <>
        <section ref={heroStyleRoot} className={heroStyle.hero}>
            <div className={heroStyle.glow1}></div>
            <div className={heroStyle.glow2}></div>
            <h1>Zuko Coffee</h1>
            <h4>Today's good mood is sponsored by coffee <br />
            search for your coffee now</h4>
            <div className={heroStyle.buttons}>
                <button className={heroStyle.shop_now}>Shop Now</button>
                <button className={heroStyle.catalog}>Catalog</button>
            </div>
            <div className={heroStyle.card}>
                <img src={cupImage} alt="cupimage" />
                <p>But first coffee</p>
                <button className={heroStyle.hurryupButton}>
                    <span>Hurry Up</span>
                    <img src={motorcyleImage} alt="hurryup" />
                </button>
            </div>
            <img ref={heroCup} className={heroStyle.coffeeCupImage} src={coffeeCup} alt="coffeeCup" />
        </section>
        </>
    );
}
export default Hero;