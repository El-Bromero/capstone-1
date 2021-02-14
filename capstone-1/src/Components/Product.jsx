import React from 'react';
import './Product.css'

function Product({ name, serialNumber, price, category, quantity, productImage }) {
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
                <button>Add to cart</button>
            </div>
        </div>
    )
}

export default Product;
