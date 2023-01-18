import React from "react";
import './style.css';


const CartItem = ({ id, image, name, price, quantity, onRemoveItem }) => {
    return (
        <div className="cart-item">
            <img className="cart-item-image" src={image} alt={name} />
            <div className="cart-item-details">
                <h3 className="cart-item-name">{name}</h3>
                <p className="cart-item-price">${price}</p>
                <p className="cart-item-quantity">Cantidad: {quantity}</p>
            </div>
            <div className="cart-item-actions">
                <button className="cart-item-remove"
                    onClick={() => onRemoveItem(id)}
                    >X</button>
            </div>
        </div>
    )
}

export default CartItem;