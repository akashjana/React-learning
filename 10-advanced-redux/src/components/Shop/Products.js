import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCTS = [
  {
    id: "p1",
    price: 50,
    title: "The Book",
    description: "The best book i ever read.",
  },
  {
    id: "p2",
    price: 10,
    title: "The Book 2",
    description: "The 2nd best book i ever read.",
  },
  {
    id: "p3",
    price: 30,
    title: "The Book 3",
    description: "The 3rd best book i ever read.",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
