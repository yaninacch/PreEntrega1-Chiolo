import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './style.css';


const CartWidget = ({ cartNumber }) => {
    return (

        <div className='cart-shopping-icon'>
            <FontAwesomeIcon icon={faCartShopping} />
            <p className='cart-number'>{cartNumber}</p>
        </div>

    )
}

export default CartWidget;