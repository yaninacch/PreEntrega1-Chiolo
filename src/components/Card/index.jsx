import React from "react";
import './style.css';

const Card = ({ product, onSelect }) => {
    // console.log(product)
    const { id, image, name, price, stock } = product || {};
    return (
        <div className="card" onClick={() => onSelect(product)}>
            <img className="card-image" src={image} alt={name} />
            <div className="card-content">
                <h3 className="card-name">{name}</h3>
                <p className="card-price">${price}</p>
                <p className="card-stock">Stock:{stock}</p>
            </div>
            <div className="card-button-container">
                <button className="card-button-minus">-</button>
                <input
                    className="card-input"
                    type="text"
                    placeholder="0"
                />
                <button className="card-button-plus">+</button>

            </div>
        </div>
    )
}

export default Card;