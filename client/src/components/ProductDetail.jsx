import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import products from "../products";

const ProductDetail = () => {
  //const [product, setProduct] = useState("");

  const ProductID = useParams();

  let product = products.find((product) => product.id === ProductID.id);

  console.log(product);

  // const fetchProduct = async () => {
  //   try {
  //     const { data } = await axios.get(products);
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchProduct();
  // }, []);

  return (
    <>
      <p>{product.name}</p>
    </>
  );
};
export default ProductDetail;
