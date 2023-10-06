import { useState } from "react";
import { Product } from "./GenerateDummyList";

export const useCart = () => {
    const [cart, setCart] = useState<Product[]>([])
    const [cartTotal, setCartTotal] = useState<string>("0");
    
    const changeProductQuantity = (productId: number, quantity: number): void => {
        const updatedCart = [...cart];
        const product = updatedCart.find(p => p.id === productId);
        if (product) {
            product.quantity = quantity;
            setCart(updatedCart);
            calculateTotal(updatedCart);
        }
    }
    
    const removeProduct = (productId: number): void => {
        let updatedCart : any = [];
    
        const exisistingProduct = cart.find(p => p.id === productId);
        
        if (exisistingProduct?.quantity === 0) {
            return
        }
        
        if (exisistingProduct) {
            updatedCart = cart.map(p => p.id === productId ? { ...p, quantity: p.quantity - 1} : p);
        }
        
        calculateTotal(updatedCart);
        setCart(updatedCart);
    }
    
    const calculateTotal = (cart: Product[]) => {
        const total = cart.reduce((acc, product) => acc + (product.price * product.quantity), 0);
        setCartTotal(total.toFixed(2));
    }
    
        
    const addToCart = (product: Product) => {
        let updatedCart;
        const exisistingProduct = cart.find(p => p.id === product.id);
        
        if (exisistingProduct) {
           updatedCart = cart.map(p => p.id === product.id ? { ...p, quantity: p.quantity + 1} : p);
        
        } else {
           updatedCart = [...cart, { ...product, quantity: 1}];
        }
        
        setCart(updatedCart);
        calculateTotal(updatedCart);
    }
    
    return {
        cart,
        cartTotal,
        changeProductQuantity,
        removeProduct,
        addToCart
    }
}