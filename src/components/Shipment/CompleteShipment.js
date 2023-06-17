import React from 'react';
import completeShipmentImage from '../../images/giphy.gif';
import './Shipment.css';

const CompleteShipment = () => {
    return (
        <div className='complete_shipment_container'>
            <img src={completeShipmentImage} alt="" />
            <h2 className='shipment_done_text'>Your Shipment is Done!</h2>
        </div>
    );
};

export default CompleteShipment;