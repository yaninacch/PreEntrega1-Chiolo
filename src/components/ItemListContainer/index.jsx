import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';

import Card from '../Card';

import { PRODUCTS } from '../../constants/data/products';

import './style.css';

const ItemListContainer = () => {
    const navigate = useNavigate();
    const onHandlerSelect = (product) => {
        navigate(`/product/${product.id}`, { state: product });
    }
    const location = useLocation();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const category = location.pathname.replace('/category/', '');

        if(category === '/') {
            setProducts(PRODUCTS);
        } else {
            const productsByCategory = PRODUCTS.filter(product => product.category === category);

            setProducts(productsByCategory);
        }
    }, [])

    return (
        <>
            <h1>PRODUCTOS</h1>
            <div className='products-container'>
                {products?.map((product) => (
                    <Card product={product} key={product.name} onSelect={onHandlerSelect} />
                ))}
            </div>
        </>
    )
}

export default ItemListContainer;