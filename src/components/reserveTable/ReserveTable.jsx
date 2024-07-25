import tableStyle from './reserveTable.module.css';
import reserveImage from '../../assets/Reserve.svg';
import dateImage from '../../assets/date.svg';
import timeImage from '../../assets/time.svg';
import guestImage from '../../assets/guest.svg';
import nameImage from '../../assets/name.svg';
import phoneImage from '../../assets/phone.svg';
import emailImage from '../../assets/email.svg';
function ReserveTable(){
    const inputFieldArray = [
        {
            id : 1,
            name : 'date',
            type : 'text',
            image : dateImage
        },
        {
            id : 2,
            name : 'time',
            type : 'text',
            image : timeImage
        },
        {
            id : 3,
            name : 'guest',
            type : 'text',
            image : guestImage
        },
        {
            id : 4,
            name : 'name',
            type : 'text',
            image : nameImage
        },
        {
            id : 5,
            name : 'phone',
            type : 'Number',
            image : phoneImage
        },
        {
            id : 6,
            name : 'email',
            type : 'text',
            image : emailImage
        }
    ]

    return(
        <>
        <section className={tableStyle.reserveTable}>
            <h2>Reserve a Table</h2>
            <img className={tableStyle.reserveImage} src={reserveImage} alt="reserve" />
            <form noValidate>
                {
                    inputFieldArray.map((inputField)=>(
                        <div key={inputField.id} id={tableStyle.input_field} className={tableStyle[inputField.name]}>
                            <input id={inputField.name} name={inputField.name} autoComplete='off' type={inputField.type} required />
                            <label htmlFor={inputField.name}><img src={inputField.image} alt={inputField.name} /> {inputField.name}</label>
                        </div>
                    ))
                }
                <button className={tableStyle.reserve_button} type='button'>Reserve</button>
            </form>
        </section>
        </>
    );
}
export default ReserveTable;