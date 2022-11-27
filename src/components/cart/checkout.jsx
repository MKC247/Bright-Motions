import './checkout.css';
import React, {useRef, useState} from 'react';

const isEmpty = value=>value.trim()==='';
const isFiveChars = value =>value.trim().length ===5;

const CheckoutForm = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street: true,
        city: true,
        postal: true,
    });

    const nameInputRef = useRef();
    const streetInputRef = useRef();
    const postalInputRef = useRef();
    const cityInputRef = useRef();



    const confirmHandler = (event)=>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredCityIsValid = !isEmpty(enteredCity);
        const enteredPostalIsValid = isFiveChars(enteredPostal);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street: enteredStreetIsValid,
            city: enteredCityIsValid,
            postal: enteredPostalIsValid,
        });

        const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredCityIsValid && enteredPostalIsValid;
        if(!formIsValid){
            return;
        }
        props.onConfirm({
            name: enteredName,
            street:enteredStreet,
            postal:enteredPostal,
            city:enteredCity
        });
    };

    const controlClasses =`control  ${formInputsValidity.name ? ``:`invalid`}`
    const controlClassesStreet =`control  ${formInputsValidity.street ? ``:`invalid`}`
    const controlClassesCity =`control  ${formInputsValidity.city ? ``:`invalid`}`
    const controlClassesPostal =`control  ${formInputsValidity.postal ? ``:`invalid`}`

    return (
        <form className='formf' onSubmit={confirmHandler}>
          <div className={controlClasses}>
            <label htmlFor='name'>Your Name</label>
            <input ref={nameInputRef} type='text' id='name' />
            {!formInputsValidity.name && <p>Please enter a valid name</p>}
          </div>
          <div className={controlClassesStreet}>
            <label htmlFor='street'>Street</label>
            <input ref={streetInputRef} type='text' id='street' />
            {!formInputsValidity.street && <p>Please enter a valid street</p>}
          </div>
          <div className={controlClassesPostal}>
            <label htmlFor='postal'>Postal Code</label>
            <input ref={postalInputRef} type='text' id='postal' />
            {!formInputsValidity.postal && <p>Please enter a valid postal code</p>}
          </div>
          <div className={controlClassesCity}>
            <label htmlFor='city'>City</label>
            <input ref={cityInputRef} type='text' id='city' />
            {!formInputsValidity.city && <p>Please enter your valid city</p>}
          </div>
          <div className='actions'>
            <button type='button' onClick={props.onCancel}>
              Cancel
            </button>
            <button className='submit'>Confirm</button>
          </div>
        </form>
      );
}

export default CheckoutForm;