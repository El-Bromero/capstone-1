import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import leavesImage from  '../Images/leaves.jfif';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const [{ cart }] = useStateValue();

    return (
        <div className="checkout">
            <img className="checkout-img" src={leavesImage} alt="" />

            {cart?.length === 0 ? (
                <div>
                    <h2>Your Shopping Cart is empty!</h2>
                    <p>
                        You currently have no items in your cart. To add an item you need to go back to the home page and click on "Add to cart" for the item(s) you need.
                    </p>
                </div>) : 
                (
                <div>
                    <h2 className="checkout-title">Your Shopping Cart</h2>

                    {/* List out all of the checkout items */}
                    {cart?.map(item => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            category={item.category}
                            quantity={item.quantity}
                            price={item.price}
                        />
                    ))}
                    
                </div>
                )
            }
        </div>

    )
}

export default Checkout;
