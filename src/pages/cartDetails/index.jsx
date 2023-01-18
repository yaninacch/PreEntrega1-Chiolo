import { addDoc, collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { CartItem } from "../../components";
import { CartContext } from "../../context";
import Alert from "react-bootstrap/Alert";
import './style.css';

const CartDetails = () => {

    const { cart, total, onRemoveItem, setCart } = useContext(CartContext);

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [checkEmail, setCheckEmail] = useState('');
    const [showAlert, setShowAlert] = useState(false);
    const [newOrderId, setNewOrderId] = useState('');


    const onHandlerOrder = (e) => {
        e.preventDefault();


        const newOrder = {
            buyer: {
                name,
                lastName,
                phone,
                email,
            },
            products: cart,
            total,
            date: new Date()
        }

        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');

        addDoc(ordersCollection, newOrder)
            .then((docRef) => {
                setNewOrderId(docRef.id);
                setShowAlert(true);
                setCart([]);
            })
            .catch((error) => {
                console.log(error)
            })

    }
    return (
        <div className="cart-container">
            <h1 className="cart-tittle">TU CARRITO</h1>
            {showAlert ? <Alert variant="success" style={{ margin: "1rem 3rem" }}>
                <Alert.Heading>
                    Su compra ha sido realizada, su numero de orden es: {newOrderId}
                </Alert.Heading>
            </Alert> :
                <div className="cart-details">
                    <div className="cart-items">
                        {cart.length === 0 ? (<p className="empty-cart">Your cart is empty</p>
                        ) : (
                            cart.map((item) => (
                                <CartItem key={item.id} {...item} onRemoveItem={onRemoveItem} />
                            )
                            ))}
                        <p className="total-cart">Total a pagar: {total}</p>
                    </div>

                    <form>
                        <div className="input-wrapper name">
                            <label htmlFor="fname">Nombre:</label>
                            <input value={name}
                                onChange={e => setName(e.target.value)}
                                type="text"
                                name="fname" />
                        </div>
                        <div className="input-wrapper lname">
                            <label htmlFor="apel">Apellido:</label>
                            <input value={lastName}
                                onChange={e => setLastName(e.target.value)}
                                type="text"
                                name="apel" />
                        </div>
                        <div className="input-wrapper number">
                            <label htmlFor="mobile">Teléfono:</label>
                            <input value={phone}
                                onChange={e => setPhone(e.target.value)}
                                type="text"
                                name="mobile" />
                        </div>
                        <div className="input-wrapper mail">
                            <label htmlFor="email">E-mail:</label>
                            <input value={email}
                                onChange={e => setEmail(e.target.value)}
                                type="text"
                                name="email" />
                        </div>
                        <div className="input-wrapper mail">
                            <label htmlFor="email">Repetir E-mail:</label>
                            <input value={checkEmail}
                                onChange={e => setCheckEmail(e.target.value)}
                                type="text"
                                name="email" />
                        </div>
                        <button type="submmit" className="button-cart" onClick={onHandlerOrder}
                            disabled={!name || !email || !phone || !lastName || !checkEmail || email != checkEmail}>
                            REALIZAR COMPRA
                        </button>
                    </form>
                </div>
            }
        </div>


    )


}

export default CartDetails;

