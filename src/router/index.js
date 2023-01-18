import { Routes, Route } from "react-router-dom";
import { Home, Detail, Category, CartDetails } from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/product/:id" element={<Detail />}/>
            <Route exact path="/category/:id" element={<Category />}/>
            <Route exact path="/cart-details"  element={<CartDetails/>}/>
        </Routes>
    )
}

export default Router;