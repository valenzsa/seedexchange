import { Container, Row, Col } from "react-bootstrap";
import CardItem from "./CardItem";
//import products from "../products";
import { useGetProductsQuery } from "../slices/productsApiSlice";
import Loader from "./Loader";
import Message from "./Message";

const CardItemContainer = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <Container className="g-0">
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
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
