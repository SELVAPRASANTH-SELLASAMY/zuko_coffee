import NavStyle from "./navbar.module.css";
import logo from '../../assets/logo.svg';
import profileIcon from '../../assets/user_profile.svg';
import cartIcon from '../../assets/cart.svg';
import { useEffect, useRef, useState } from "react";
const Navbar = () =>{
    const navBar = useRef();
    const headerElement = useRef();
    const [headerColor, setHeaderColor] = useState('transparent');
    useEffect(()=>{
        const navBarWidth = parseInt(getComputedStyle(navBar.current).width) + parseInt(getComputedStyle(document.querySelector('header')).paddingRight) * 2;
        document.querySelector('body').setAttribute('style',`--navbarWidth:${navBarWidth}`);
        headerElement.current.style.background = `linear-gradient(to right, ${headerColor} calc(100% - ${navBarWidth}px),#7C573C ${navBarWidth}px)`;
    },[headerColor]);

    useEffect(()=>{
        const handleColorChange = () => {
            window.scrollY >= 80 ? setHeaderColor('#1A1011') : setHeaderColor('transparent');
        }
        window.addEventListener('scroll',handleColorChange);
        return ()=>{
            window.removeEventListener('scroll',handleColorChange);
        }
    },[]);

    return(
        <>
        <header ref={headerElement}>
            <img src={logo} alt="logo" className={NavStyle.logo} />
            <div className={NavStyle.profileAndCart}>
                <img src={profileIcon} alt="profile" />
                <img src={cartIcon} alt="Cart" />
            </div>
            <nav ref={navBar}>
                <ul>
                    <li>Home</li>
                    <li>Menu</li>
                    <li>Services</li>
                    <li>Product</li>
                    <li>Blog</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
        </>
    );
}
export default Navbar;