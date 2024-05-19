import { Container, Row, Col } from "react-bootstrap";
import CardItem from "./CardItem";
import products from "../products";

const CardItemContainer = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mb-5">
        {products.map((product) => (
          <Col lg={3} md={4} sm={6} xs={12} className="mb-3" key={product.id}>
            <CardItem {...product} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};
export default CardItemContainer;
