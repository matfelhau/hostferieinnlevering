import { useEffect, useState } from "react";
import createRandomProducts, { Product } from "./GenerateDummyList";
import { useCartContext } from "./CartContext";

export const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const { removeProduct, addToCart } = useCartContext();

    useEffect(() => {
        const dummyProducts = createRandomProducts(5);
        setProducts(dummyProducts);
    }, []);

    return (
        <div>
            <h1>Random Products:</h1>
            <ul className="product-list">
                {products.map((product, index) => (
                    <li key={index} className="product-item">
                        <h2 className="product-title">{product.title}</h2>
                        <p className="product-category">Category: {product.category}</p>
                        <p className="product-price">Price: {product.price.toFixed(2)} KR</p>
                        <button onClick={() => addToCart(product)}>Add to cart</button>
                        <button onClick={() => removeProduct(product.id)}>Remove from cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

