import React from "react";
import Product from "../components/Product";
import Data from "../Data";

export default function HomeScreen() {
  return (
    <div className="row center">
      {Data.products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>
  );
}
