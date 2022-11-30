import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './style.css';


function CartWidget(props) {
    return (
        <>
            <FontAwesomeIcon className='cartShoppingIcon' icon={faCartShopping} />
            <p>{props.cartNumber}</p>
        </>
    )
}

export default CartWidget;