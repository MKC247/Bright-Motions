import React, { useContext, useState } from "react"
import './cartitems.css';
import Modal from "../UI/Modal";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import CheckoutForm from "./checkout";


const Cart = (props) => {
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const[isSubmitting, setIsSubmitting]=useState(false);
    const[didSubmit, setDidSubmit] = useState(false);
    const cartCtx = useContext(CartContext);

    const totalAmount = `Ksh${cartCtx.totalAmount.toFixed(0)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        setIsCheckingOut(true)
    };

    const SubmitOrderHandler = async(userData)=>{
        setIsSubmitting(true);
        await fetch('https://carpartdata-default-rtdb.firebaseio.com/orders.json', {
        method:'POST',
        body: JSON.stringify({
            user: userData,
            orderedItems: cartCtx.items
        })
       });
       setIsSubmitting(false);
       setDidSubmit(true);
       cartCtx.clearCart();
    };
      
    const cartItems = <ul className="cart-items">{
        cartCtx.items.map((item) => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)} />
        ))}</ul>

    const modalActions =
        <div className="actions">
            <button onClick={props.onClose} className="button--alt">Close</button>
            {hasItems &&
                <button onClick={orderHandler} className="button">Order</button>
            }
        </div>

    const cartmodalContent = (<React.Fragment>
            {cartItems}
            <div className="total">
                <span> Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {isCheckingOut && (
                <CheckoutForm onConfirm={SubmitOrderHandler} onCancel={props.onClose} />
            )}
            {!isCheckingOut && modalActions}
    </React.Fragment>);

    const isSubmittimgOrderData = <p>Sending Order data...</p>
    const didSubmitOrderData = <React.Fragment>
        <p>Order data sent successfully!</p>
        <div className="actions">
            <button onClick={props.onClose} className="button">Close</button>

        </div>
    </React.Fragment>

    return (
        <Modal onClose={props.onClose}>
        {!isSubmitting && !didSubmit && cartmodalContent}
        {isSubmitting && isSubmittimgOrderData}
        {didSubmit && didSubmitOrderData}
        </Modal>
    )
}

export default Cart;