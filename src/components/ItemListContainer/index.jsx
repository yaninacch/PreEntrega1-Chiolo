import React, { useEffect, useState, useContext } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import Card from '../Card';
//import { PRODUCTS } from '../../constants/data/products';
import './style.css';
import Loader from "../loader";
import { getFirestore, collection, getDocs, query, where, limit } from 'firebase/firestore'
import { PRODUCTS } from "../../constants/data/products";
import { CartContext } from "../../context";


const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const { products, setProducts } = useContext(CartContext);
    const navigate = useNavigate();
    const onHandlerSelect = (product) => {
        navigate(`/product/${product.id}`);
    }
    const location = useLocation();

    useEffect(() => {
        setLoading(true);
        const db = getFirestore();
        

        const q = query(collection(db, 'products'),
            
        );

        getDocs(q)
            .then((snapshot) => {
                if (snapshot.size === 0) {
                    setProducts([]);
                } else {
                    const result = snapshot.docs.map((doc) => (doc.data()))

                    const category = location.pathname.replace('/category/', '');

                    if (category === '/') {
                        setProducts(result);
                    } else {
                        const productsByCategory = result.filter(product => product.category === category);

                        setProducts(productsByCategory);
                    }
                }

            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false);
            })
    }, [location.pathname]);

    return (
        <>
            {loading ?
                (<div className="loading-container">
                    <Loader />
                </div>) :
                <>
                    <h1>PRODUCTOS</h1>
                    <div className='products-container'>
                        {products.map((product) => (
                            <Card product={product} key={product.name} onSelect={onHandlerSelect} />
                        ))}
                    </div>
                </>}

        </>
    )
}

export default ItemListContainer;