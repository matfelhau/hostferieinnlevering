import React from 'react';
import { ProductList } from "@/components/ProductList";
import { render, screen } from "@testing-library/react";

test('renders product list', () => {
    render(<ProductList />);
})