import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);
    const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

    const addToCart = (product,quantity=1) => {
        setCartItems(prev=>{
            const existing = prev.find(item=>item.id===product.id);
            if(existing){
                return prev.map(item=>item.id === product.id?{...item,quantity:item.quantity+quantity}:item);
            }
            return [...prev, {...product, quantity}];
        });
    };

    const removeFromCart = (productId) => {
        setCartItems(prev => prev.filter(item=>item.id!==productId));
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity < 1) {
            removeFromCart(productId);
            return;
       }
        setCartItems(prev => prev.map(item=>item.id===productId?{...item, quantity:newQuantity}:item));
        //newQuantity
    };

    const clearCart = () => {
        setCartItems([]);
    }
    const cartTotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart,
            isOrderModalOpen,
            setIsOrderModalOpen
        }}>
            {children}
        </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);