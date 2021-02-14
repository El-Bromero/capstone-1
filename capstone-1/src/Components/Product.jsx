import React from 'react';
import './Product.css'
import { useStateValue } from './StateProvider';

function Product({ name, serialNumber, price, category, quantity, productImage }) {
    
    const [{ cart }, dispatch] = useStateValue();
    
    const addToCart = () => {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: serialNumber,
                title: name,
                image: productImage,
                category: category,
                quantity: quantity,
                price: price
            },
        })
    };
    
    return (
        <div className="product">
            <div className="product-info">
                <p>{name}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className="product-bottom">
                <img src={productImage} alt="" />
                <button onClick={addToCart}>Add to cart</button>
            </div>
        </div>
    )
}

export default Product;
