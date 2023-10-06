import { useCartContext } from "./CartContext";

export const ProductCart = () => {
    const { cartTotal } = useCartContext();
    return (
        <div>
            <h2 className="cart-total">
                    Cart Total: {cartTotal} KR
            </h2>
        </div>
    );
} 



