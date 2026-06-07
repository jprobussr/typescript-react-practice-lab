import './ExerciseFive.css';

type Product = {
  id: number;
  name: string;
  price: number;
  isOnSale: boolean;
  category: string;
  rating: number;
  discountPercent?: number;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Wireless Mouse',
    price: 29.99,
    isOnSale: true,
    category: 'Electronics',
    rating: 4.7,
    discountPercent: 15,
  },
  {
    id: 2,
    name: 'Mechanical Keyboard',
    price: 89.99,
    isOnSale: false,
    category: 'Electronics',
    rating: 4.8,
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 39.99,
    isOnSale: true,
    category: 'Office',
    rating: 4.5,
    discountPercent: 10,
  },
];

const formatPrice = (price: number): string => {
    return `${price.toFixed(2)}`;
};

const getSaleMessage = (onSale: boolean): string => {
    if (onSale) {
        return 'Product is on sale today.';
    }

    return 'Product is not on sale today.';
}

const ExerciseFive = () => {
  return (
    <section className="exercise-five">
      <h1>Chapter 1: TypeScript Basics</h1>
      <h2>Exercise 5: Optional Object Properties</h2>

      <div className="exercise-five__grid">
        {products.map((product) => {
          return (
            <div className="exercise-five__card" key={product.id}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: {formatPrice(product.price)}</p>
              <p>
                {getSaleMessage(product.isOnSale)}
              </p>

              {product.discountPercent !== undefined && (
                <p>Discount: {product.discountPercent}% off</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExerciseFive;
