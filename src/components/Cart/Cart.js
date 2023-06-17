import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
const Cart = ({cart,clearCart, children}) => {
    // calculation 
    const quantity = cart.reduce((previous,next)=> previous + next.quantity,0);
    const totalPrice = cart.reduce((previous,next)=> previous + (next.price * next.quantity),0);
    const totalShipping = cart.reduce((previous,next)=>previous + next.shipping,0);
    const totalTax = parseFloat(((totalPrice + totalShipping) * 0.05).toFixed(2));
    const grandTotal = totalPrice + totalShipping + totalTax;
    return (
        <div className='cart'>
            <p className='cart-heading'>Order Summary</p>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: Tk {totalPrice}</p>
            <p>Shipping Charge: Tk {totalShipping}</p>
            <p>Tax: Tk {totalTax}</p>
            <p className='grand-total'>Grand Total: Tk {grandTotal}</p>
            <button onClick={clearCart} className='clear-btn'>Clear Cart <span style={{marginLeft:'5px'}}><FontAwesomeIcon icon={faTrashCan}></FontAwesomeIcon></span></button>
            <br />
            <div className='opt-btn'>
                {children}
            </div>
        </div>
    );
};

export default Cart;