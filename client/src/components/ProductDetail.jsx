import { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaStar, FaRegStar } from "react-icons/fa";
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
    <Container>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <img
            src={product.images[0]}
            alt={product.title}
            className="img-fluid d-flex"
          />
        </Col>
        <Col lg={6} md={6} sm={12} xs={12}>
          <h1>{product.name}</h1>
          <div className="ratings mb-2 d-flex align-items-baseline" as="div">
            <div className="star-ratings">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaRegStar />
            </div>
            <div className="number-of-reviews">
              {product.numberOfReviews} Reviews
            </div>
          </div>
          <div
            className="prices d-flex mb-3"
            style={{ gap: "10px", alignItems: "baseline" }}
          >
            <div className="old-price text-decoration-line-through text-black-50 fs-3">
              ${product.oldPrice}
            </div>
            <div className="price fs-3">${product.price}</div>
          </div>
          <p>{product.description}</p>
          <div className="d-flex">
            <input
              class="form-control text-center me-3"
              id="inputQuantity"
              type="num"
              value="1"
              style={{ maxWidth: "3rem" }}
            ></input>
            <Button className="btn btn-outline-dark" variant="light">
              Add To Cart
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
export default ProductDetail;
