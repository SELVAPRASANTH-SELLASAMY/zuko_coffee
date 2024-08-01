import footerStyle from './footer.module.css';
import footerImage from '../../assets/Footer_Img.svg';
import locationIcon from '../../assets/location.svg';
import emailIcon from '../../assets/mail.svg';
import phoneIcon from '../../assets/footerphone.svg';
import linkedIn from '../../assets/linkedin.svg';
import pinterest from '../../assets/pinterest.svg';
import instagram from '../../assets/instagram.svg';
import { useMemo } from 'react';
function Footer(){
    const year = useMemo(() =>{
        const date = new Date();
        return date.getFullYear();
    },[]);
    return(
        <>
        <footer>
            <div className={footerStyle.socialMedia}>
                <p>Social Media : </p> 
                <img src={linkedIn} alt="linkedin" />
                <img src={pinterest} alt="pinterest" />
                <img src={instagram} alt="instagram" />
            </div>
            <img className={footerStyle.footerImage} src={footerImage} alt="footerImage" />
            <div className={footerStyle.column}>
                <p>About</p>
                <ul>
                    <li>Our Story</li>
                    <li>FAQ</li>
                    <li>Careers</li>
                </ul>
            </div>
            <div className={footerStyle.column}>
                <p>Customer Resources</p>
                <ul>
                    <li>Menu</li>
                    <li>Locations</li>
                    <li>Support</li>
                </ul>
            </div>
            <div className={footerStyle.column}>
                <p>Services</p>
                <ul>
                    <li>Payment options</li>
                    <li>Refunds & Exchanges</li>
                    <li>Limitation Of Liability</li>
                </ul>
            </div>
            <address id='contact' className={footerStyle.column}>
                <ul>
                    <li>
                        <span><img src={locationIcon} alt="location" /></span> 12 jhon Avenue #35 - new York
                    </li>
                    <li>
                        <span><img src={emailIcon} alt="email" /></span> zukocoffee@coffee.com
                    </li>
                    <li>
                        <span><img src={phoneIcon} alt="phone" /></span> +1-222-34-zuko
                    </li>
                </ul>
            </address>
            <div className={footerStyle.copyright}>
                <p className={footerStyle.author}>Created by Prasanth</p>
                <p><span>&copy;</span> {year} Zuko Coffee. All Rights Reserved.</p>
            </div>
        </footer>
        </>
    );
}
export default Footer;