import NavStyle from "./navbar.module.css";
import logo from '../../assets/logo.svg';
import profileIcon from '../../assets/user_profile.svg';
import cartIcon from '../../assets/cart.svg';
import hamburderIcon from '../../assets/hamburger.svg';
import { useEffect, useRef } from "react";
const Navbar = ({mainElement}) =>{
    const navBar = useRef();
    const headerElement = useRef();
    const menu = useRef();

    useEffect(()=>{
        const toggleNav = () => {
            navBar.current.classList.toggle(NavStyle.displayNav);
        }
        const closeNav = () => {
            navBar.current.classList.remove(NavStyle.displayNav);
        }
        menu.current.addEventListener('click',toggleNav);
        mainElement && mainElement.current.addEventListener('click',closeNav);
        navBar.current.addEventListener('click',closeNav);
        return ()=>{
            window.removeEventListener('click',toggleNav);
            Window.removeEventListener('click',closeNav);
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
            <img ref={menu} className={NavStyle.hamburger} src={hamburderIcon} alt="hamburger" />
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