import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import {removeAllDb, setToDb } from '../../utilities/localStorageDb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const navigate = useNavigate();
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useCart(products);
    const addToCart = product =>{
        let newCart = [];
        const exist = cart.find(element => element.id === product.id);
        if(exist){
            const rest = cart.filter(element => element.id !== product.id);
            product.quantity = product.quantity + 1;
            newCart = [...rest, product];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];  
        }
        setCart(newCart);
        setToDb(product.id);
    }
    const clearCart = () =>{
        const emptyCart = [];
        setCart(emptyCart);
        removeAllDb();
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} clearCart={clearCart}>
                    <button onClick={()=> navigate('/orders')}>Review Orders <FontAwesomeIcon icon={faArrowRight}/></button>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;