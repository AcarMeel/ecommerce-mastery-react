
export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToAdd.id);
    if (existingCartItem) {
        return cartItems.map(cart => 
            cart.id === cartItemToAdd.id ? 
            {...cart, quantity: cart.quantity + 1 }
            : cart
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}