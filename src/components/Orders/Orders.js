import { faCreditCardAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/localStorageDb';
import Cart from '../Cart/Cart';
import OrderItem from '../OrderItem/OrderItem';
import './Orders.css';

const Orders = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const deleteItem = item =>{
        const rest = cart.filter(element => element.id !== item.id);
        setCart(rest);
        removeFromDb(item.id);
    }
    return (
        <div className='orders-container'>
            <div className='orders-items-container'>
                {
                    cart.map(item => <OrderItem item={item} key={item.id} deleteItem={deleteItem}></OrderItem>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={()=>navigate('/shipment')}>Proceed Shipping <FontAwesomeIcon icon={faCreditCardAlt}/></button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;