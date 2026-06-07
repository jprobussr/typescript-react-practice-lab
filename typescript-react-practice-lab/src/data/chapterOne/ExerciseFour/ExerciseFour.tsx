import './ExerciseFour.css';

type Product = {
  id: number;
  name: string;
  price: number;
  isOnSale: boolean;
  category: string;
  rating: number;
};

const ExerciseFour = () => {
  const products: Product[] = [
    {
      id: 1,
      name: 'Wireless Mouse',
      price: 29.99,
      isOnSale: true,
      category: 'Electronics',
      rating: 4.7,
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
      isOnSale: false,
      category: 'Office',
      rating: 4.5,
    },
  ];

  const formatPrice = (price: number): string => {
    return `${price.toFixed(2)}`;
  }

  const getSaleMessage = (onSale: boolean): string => {
    if (onSale) {
      return 'Product is on sale today.';
    }

    return 'Product is not on sale today.';
  }



  return (
    <section className="exercise-four">
      <h1>Chapter 1: TypeScript Basics</h1>
      <h2>Exercise 4: Arrays of Typed Objects</h2>

      <div className="exercise-four__grid">
        {products.map((product) => {
          return (
            <div className="exercise-four__card" key={product.id}>
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${formatPrice(product.price)}</p>
              <p>Rating: {product.rating} / 5</p>
              <p>
                {getSaleMessage(product.isOnSale)}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ExerciseFour;
