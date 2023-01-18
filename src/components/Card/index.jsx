import React from "react";
import './style.css';

const Card = ({ product, onSelect, type = 'vCard', decreaseQty, increaeseQty, numberOfItem}) => {

    const { id, image, name, price, stock } = product || {};

    return (
        <div className={type === 'vCard' ? 'card' : 'cardMax'} onClick={() => onSelect(product)}>
            <img className="card-image" src={image} alt={name} />
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-price">${price}</p>
                <p className="card-stock">Stock:{stock}</p>
            </div>
            {type === 'mCard' && (
            <div className="card-button-container">
                <button onClick={() => decreaseQty(id)} className="card-button-minus">-</button>
                <input
                    disabled
                    className="card-input"
                    type="text"
                    value={numberOfItem}
                />
                <button 
                onClick={() => increaeseQty(id)} 
                className="card-button-plus"
                disabled={numberOfItem === stock}
                >+</button>

            </div>
            )}
        </div>
        
    )
}

export default Card;