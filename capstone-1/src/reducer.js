export const initialState = {
    cart: [
        {
            id: "1234",
            title: "Daisy",
            image: "https://images.unsplash.com/photo-1458596376782-d1c25e7da40e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1041&q=80",
            category: "flower",
            quantity: 4,
            price: 2.99,
        }
    ],
    user: null,
};

function reducer(state, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':
            // Logic for adding item to cart
            return {
                ...state,
                cart: [...state.cart, action.item],
             }
        case 'REMOVE_FROM_CART':
            // Logic for removing item from cart
            let newCart = [...state.cart];
            
            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

            if(index >= 0) {
                // Item exists in cart so remove it
                newCart.splice(index, 1);
            }
            else {
                console.warn(
                    `Cannot remove product (id: ${action.id} as it is not in cart`
                )
            }

            return { 
                ...state, 
                cart: newCart
             };
        default:
            return state;
    }
}

export default reducer;