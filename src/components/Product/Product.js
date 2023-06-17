import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({product,addToCart}) => {
    const {img,name,price,seller,ratings} = product; 
    return (
        <div className='card'>
            <div className='product'>
                <img src={img} alt="" />
                <div className="info">
                    <h3 className='name-info'>{name}</h3>
                    <p className='price-info'>Price: ${price}</p>
                    <div className='extra-info'>
                        <p><small>Manufacturer: {seller}</small></p>
                        <p><small>Rating: {ratings}</small></p>
                    </div>
                </div>
            </div>
            <button onClick={()=>addToCart(product)}>Add to Cart <span style={{marginLeft:'5px'}}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></span></button>
        </div>
    );
};

export default Product;