import React from 'react';
import { useNavigate } from 'react-router-dom';

const Shipment = () => {
    const navigate = useNavigate();

    const proceedShipping = () => {
        navigate('/shipped');
    }

    return (
        <div className='form-container'>
            <h1 className='form-title'>Shipping Details</h1>
            <form>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    {/* <input type="email" name="email" readOnly value={user? user.email :''} required/> */}
                </div>
                <div className="input-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" required />
                </div>
                <div className="input-group">
                    <label htmlFor="address">Address</label>
                    <input type="text" name="address" required />
                </div>
                <div className="input-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="text" name="phone" required />
                </div>
                {/* <p style={{color:'red'}}>{error}</p> */}
            </form>
            <button onClick={proceedShipping()} className='submit-btn' type="submit" value="Add Shipping" >Proceed Shipping</button>
        </div>

    );
};

export default Shipment;