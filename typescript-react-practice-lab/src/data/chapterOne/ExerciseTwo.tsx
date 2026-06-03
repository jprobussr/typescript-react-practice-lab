import "./ExerciseTwo.css";

const ExerciseTwo = () => {

  const productName: string = "Wireless Mouse";
  const productPrice: number = 29.99;
  const isOnSale: boolean = true;

  const formatPrice = (price: number): string => {
    return `$${price.toFixed(2)}`;
  };

  const getSaleMessage = (onSale: boolean): string => {
    if (onSale) {
      return 'Product is on sale today.';
    }

    return 'Product is not on sale today.'
  }



  return (
    <section className="exercise-two">
      <h1>Chapter 1: TypeScript Basics</h1>
      <h2>Exercise 2: Typed Helper Functions</h2>

      <div className="exercise-two__card">
        <p>Product: {productName}</p>
        <p>Price: {formatPrice(productPrice)}</p>
        <p>
          {getSaleMessage(isOnSale)}
        </p>
      </div>
    </section>
  );
};

export default ExerciseTwo;
