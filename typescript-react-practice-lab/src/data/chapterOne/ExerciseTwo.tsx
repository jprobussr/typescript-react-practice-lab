import "./ExerciseTwo.css";

const ExerciseTwo = () => {
  const productName: string = "Wireless Mouse";
  const productPrice: number = 29.99;
  const isOnSale: boolean = true;

  return (
    <section className="exercise-two">
      <h1>Chapter 1: TypeScript Basics</h1>
      <h2>Exercise 2: Typed Helper Functions</h2>

      <div className="exercise-two__card">
        <p>Product: {productName}</p>
        <p>Price: {productPrice}</p>
        <p>{isOnSale ? 'Product is on sale' : 'Product is not on sale today.'}</p>
      </div>
    </section>
  );
};

export default ExerciseTwo;
