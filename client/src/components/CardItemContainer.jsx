import { Container, Row, Col } from "react-bootstrap";
import CardItem from "./CardItem";
//import products from "../products";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const CardItemContainer = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <Container>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <div>{error?.data?.message || error.error}</div>
      ) : (
        <Row className="justify-content-md-center mb-5">
          {products.map((product) => (
            <Col
              lg={3}
              md={4}
              sm={6}
              xs={12}
              className="mb-3"
              key={product._id}
            >
              <CardItem {...product} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};
export default CardItemContainer;
