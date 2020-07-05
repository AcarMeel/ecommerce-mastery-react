
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

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(item => item.id === cartItemToRemove.id);
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(item => item.id !== cartItemToRemove.id);
    }
    return cartItems.map(item =>
        (item.id === cartItemToRemove.id) ?
        {
            ...item,
            quantity: item.quantity - 1
        }
        : item
    )

}