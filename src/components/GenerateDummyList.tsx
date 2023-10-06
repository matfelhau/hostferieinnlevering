export type Product = {
  id: number;
  title: string;
  category: string;
  price: number;
  quantity: number;
};

const categories = ['Elektronikk', 'Klær', 'Sport', 'Hage', 'Hjem', 'Utstyr', 'Verktøy', 'Mat'];
  
const randomTitle = (): string => {
  const words:  string[] = ["God", "Best", "Billig", "Super", "Fantastisk", 'Grei', 'Nokså', 'Normal'];
  const numberOfWords: number = Math.floor(Math.random() * 3) + 1;
  let title = "";
  for (let i = 0; i < numberOfWords; i++) {
    title += words[Math.floor(Math.random() * words.length)] + " ";
  }
  return title.trim();
};

const randomPrice = (): number => {
  return parseFloat((Math.random() * 1000).toFixed(2));
};

const randomCategory = (): string => {
  return categories[Math.floor(Math.random() * categories.length)];
};

const createRandomProducts = (numberOfProducts: number): Product[] => {
  const products: Product[] = [];
  let currentNumber = 0;
  for (let i = 0; i < numberOfProducts; i++) {
    products.push({
      id: currentNumber += 1,
      title: randomTitle(),
      category: randomCategory(),
      price: randomPrice(),
      quantity: 0,
    });
  }
  return products;
};

export default createRandomProducts;