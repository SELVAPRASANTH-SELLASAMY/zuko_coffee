import NavStyle from "./navbar.module.css";
import logo from '../../assets/logo.svg';
import profileIcon from '../../assets/user_profile.svg';
import cartIcon from '../../assets/cart.svg';
import hamburderIcon from '../../assets/hamburger.svg';
import { useEffect, useRef, useState } from "react";
const Navbar = () =>{
    const navBar = useRef();
    const headerElement = useRef();
    const menu = useRef();
    const [headerColor,setHeaderColor] = useState('transparent');

    useEffect(()=>{
        const handleColorChange = () => {
            window.scrollY > 150 ? setHeaderColor('#533529') : setHeaderColor('transparent');
        }
        headerElement.current.style.background = `linear-gradient(to right, ${headerColor} calc(100% - 585px),#7C573C ${window.innerWidth >= 769 ? 585 : 1200}px)`;
        window.addEventListener('scroll',handleColorChange);
        return ()=>{
            window.removeEventListener('scroll',handleColorChange);
        }
    },[headerColor]);

    useEffect(()=>{
        const navbar = navBar.current;
        const menubar = menu.current;
        const toggleMenubar = () => {
            navbar.classList.toggle(NavStyle.displayNav);
        }
        menubar.addEventListener('click',toggleMenubar);
        navbar.addEventListener('click',toggleMenubar);
        return ()=>{
            menubar.removeEventListener('click',toggleMenubar);
            navbar.removeEventListener('click',toggleMenubar);
        }
    },[])

    return(
        <>
        <header ref={headerElement}>
            <img src={logo} alt="logo" className={NavStyle.logo} />
            <div className={NavStyle.profileAndCart}>
                <img src={profileIcon} alt="profile" />
                <img src={cartIcon} alt="Cart" />
            </div>
            <img ref={menu} className={NavStyle.hamburger} src={hamburderIcon} alt="hamburger" />
            <nav ref={navBar}>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#menu">Menu</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#product">Product</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        </>
    );
}
export default Navbar;