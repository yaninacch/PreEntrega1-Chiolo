import React from "react";
import './style.css';

import { Card } from '../../components';

const ItemDetailContainer = ({ product }) => {
    return <Card product={product} key={product.name} onSelect={() => { }} />
}

export default ItemDetailContainer;