import menuStyle from './menu.module.css';
import mdiArrowIcon from '../../assets/mdi_arrow.svg';
function Menu(){
    const menuArray = [
        {
            price : 40,
            item : 'Chocolate'
        },
        {
            price : 30,
            item : 'Expresso'
        },
        {
            price : 25,
            item : 'DoubleEs'
        },
        {
            price : 30,
            item : 'Cappuccino'
        },
        {
            price : 45,
            item : 'Caramel'
        },
        {
            price : 25,
            item : 'Mocha'
        },
        {
            price : 50,
            item : 'Doppio'
        },
        {
            price : 25,
            item : 'Latte'
        }
    ];

    return(
        <>
        <section className={menuStyle.menu}>
            <h2>Popular Menu</h2>
            <div className={menuStyle.menuItems}>
                {
                    menuArray.map((items,index)=>(
                        <p key={index}><span className={menuStyle.price}>{'$'+items.price}</span>{items.item}</p>
                    ))
                }
            </div>
            <div className={menuStyle.ourMenuButton}>
                <p className={menuStyle.mdibutton}>Our Menu</p>
                <img src={mdiArrowIcon} alt="mdiArrow" />
            </div>
        </section>
        </>
    );
}
export default Menu;