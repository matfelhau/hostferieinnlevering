'use client';

import React, { useEffect, useState } from 'react'; 
import { ProductCart } from '@/components/ProductCart';
import { ProductList } from '@/components/ProductList';
import { Product } from '@/components/GenerateDummyList';
import { CartProvider } from '@/components/CartContext';
import axios from 'axios';
import apiHandler from '../../pages/api/products';
import './globals.css';

export default function Home() {
  
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    apiHandler;
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/products');
        setProducts(response.data);
      } catch (error){
        console.error('Error', error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='container'>
      <CartProvider>
        <ProductList />
        <ProductCart />
      </CartProvider>
    </div>
  )
}
