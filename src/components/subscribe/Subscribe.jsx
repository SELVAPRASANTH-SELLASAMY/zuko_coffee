import subscribeStyle from './subscribe.module.css';
import emailNotificationIcon from '../../assets/email_notification.svg';
function Subscribe(){
    return(
        <>
        <section className={subscribeStyle.subscribe}>
            <p>subscribe to our newsletter, discounts and promotions</p>
            <div id={subscribeStyle.input_field}>
                <input id='email' name='email' autoComplete='off' type='text' required/>
                <label htmlFor='email'><img src={emailNotificationIcon} alt="email" />Your Email Address</label>
            </div>
            <button className={subscribeStyle.subscribeButton}>Subscribe</button>
        </section>
        </>
    );
}
export default Subscribe;