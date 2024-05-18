import { Col } from "react-bootstrap";
import CardItem from "./CardItem";

const CardItemContainer = () => {
  return (
    <Col lg={3} md={4} sm={6} xs={12} className="mb-3">
      <CardItem />
    </Col>
  );
};
export default CardItemContainer;
