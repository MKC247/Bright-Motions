import React, {useContext, useEffect, useState} from "react";
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartContext from "../store/cart-context";
import './headerbutton.css';

const HeaderCartButton = props=>{
    const [btnIsClicked, setBtnIsClicked] = useState(false);
    const cartCtx = useContext(CartContext);
    const {items} = cartCtx;

    const numberOfCartItems = items.reduce((curNumber, item)=>{
        return curNumber + item.amount;
    },0);
    const btnClasses = `button ${btnIsClicked ? `bump`: ''}`
     useEffect(()=>{
        if(items.length === 0){
            return;
        }
        setBtnIsClicked(true);

        const timer = setTimeout(()=>{
            setBtnIsClicked(false);
        }, 300);
        
        return ()=>{
            clearTimeout(timer);
        };

     }, [items]);  

    return <button onClick={props.onShowCart} className={btnClasses}>
        <span className='icon'>
        <ShoppingCartOutlinedIcon />
        </span>
        <span>Your Cart</span>
        <span className='badge'>{numberOfCartItems}</span>
    </button>
}
export default HeaderCartButton;