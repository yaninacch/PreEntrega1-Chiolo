import React from "react";
import './style.css';
import { useLocation } from "react-router-dom";
import { ItemDetailContainer } from "../../components";

const Detail = () => {
    const { state } = useLocation();
    console.log(state)
    return (
        <div className="container">
            <ItemDetailContainer product={state}></ItemDetailContainer>
        </div>
    )
}

export default Detail