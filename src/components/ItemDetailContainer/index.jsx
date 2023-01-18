import React, { useState, useContext, useEffect } from "react";
import './style.css';
import { Card } from '../../components';
import { useLocation, useParams } from "react-router-dom";
import { CartContext } from "../../context";
import { collection, getDoc, doc, getFirestore, query, where, getDocs } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams() || {};

    const { onDecreaseItem, onIncreaseItem, getItemQuantity, products, setProducts } = useContext(CartContext);

    useEffect(() => {
        const db = getFirestore();
        const q = query(
            collection(db, 'products'),
            where('id', '==', id),
        );
        getDocs(q)
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    setProduct(doc.data())
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }, [id])

    useEffect(() => {
        if (products.length === 0) {
            const db = getFirestore();
            const q = query(
                collection(db, 'products'),
            );
            getDocs(q)
                .then((snapshot) => {
                    snapshot.forEach((doc) => {
                        setProducts((prev) => [...prev, doc.data()])
                    })
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [products.length, setProducts])

    return (product &&
        <Card classname='detail-card' product={product}
            key={product.name}
            type='mCard'
            onSelect={() => { }}
            decreaseQty={onDecreaseItem}
            increaeseQty={onIncreaseItem}
            numberOfItem={getItemQuantity(product?.id)}
        />
    )
}

export default ItemDetailContainer;