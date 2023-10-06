import React, { ReactNode, createContext, useContext } from "react";
import { useCart } from "./ChangeProductQuantity";
import { Product } from "./GenerateDummyList";

type CartProviderProps = {
    children: ReactNode;
}

type CartContextType = {
    cart: Product[];
    cartTotal: string;
    changeProductQuantity: (productId: number, quantity: number) => void;
    removeProduct: (productId: number) => void;
    addToCart: (product: Product) => void;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    cartTotal: '0',
    changeProductQuantity: () => {},
    removeProduct: () => {},
    addToCart: () => {}
});

export const useCartContext = () => useContext(CartContext);

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
    const cartMethods = useCart();
    return (
        <CartContext.Provider value = {cartMethods}>
            {children}
        </CartContext.Provider>
    );
};