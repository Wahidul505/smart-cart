import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './OrderItem.css';

const OrderItem = ({ item, deleteItem }) => {
    const { img, name, price, shipping, quantity } = item;
    return (
        <div className='order-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='order-info'>
                <div>
                    <p>{name}</p>
                    <p>Price: ${price}</p>
                    <p><small>Shipping: ${shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <button onClick={()=>deleteItem(item)} className='delete-btn'><FontAwesomeIcon icon={faTrashAlt}/></button>
            </div>
        </div>
    );
};

export default OrderItem;