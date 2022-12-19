import { Routes, Route } from "react-router-dom";
import { Home, Detail, Category} from "../pages";

const Router = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path="/product/:id" element={<Detail />}/>
            <Route exact path="/category/:id" element={<Category />}/>
        </Routes>
    )
}

export default Router;