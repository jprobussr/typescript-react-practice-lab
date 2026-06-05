import './ExerciseThree.css';

type Product = {
  name: string;
  price: number;
  isOnSale: boolean;
  category: string;
  rating: number;
};

const ExerciseThree = () => {
  const product: Product = {
    name: 'Wireless Mouse',
    price: 29.99,
    isOnSale: true,
    category: 'Electronics',
    rating: 4.7,
  };

  console.log(product);

  const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
  };

  const getSaleMessage = (onSale: boolean): string => {
    if (onSale) {
      return 'Product is on sale this week';
    }

    return 'Product is not on sale this week.';
  };

  return (
    <section className="exercise-three">
      <h1>Chapter 1: TypeScript Basics</h1>
      <h2>Exercise 3: Typed Objects</h2>

      <div className="exercise-three__card">
        <p>Product: {product.name}</p>
        <p>Category: {product.category}</p>
        <p>Price: {formatPrice(product.price)}</p>
        <p>{getSaleMessage(product.isOnSale)}</p>
        <p>Rating: {product.rating} / 5</p>
      </div>
    </section>
  );
};

export default ExerciseThree;
