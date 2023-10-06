import createRandomProducts from "@/components/GenerateDummyList"

test('createRandomProducts generates the expected number of products.', () => {
    const products = createRandomProducts(5);
    expect(products.length).toBe(5);
});

test ('each product has the expected key', () => {
    const products = createRandomProducts(1);
    const product = products[0];
    
    expect(product).toHaveProperty('id');
    expect(product).toHaveProperty('title');
    expect(product).toHaveProperty('category');
    expect(product).toHaveProperty('price');
});