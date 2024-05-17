import { Button, Card } from "react-bootstrap";

const CardItem = () => {
  return (
    <Card>
      <Card.Img variant="top" src="https://placehold.co/300x300" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Card.Text
          className="prices d-flex mb-2"
          style={{ gap: "10px", alignItems: "baseline" }}
          as="div"
        >
          <div className="old-price text-decoration-line-through text-black-50">
            $19.99
          </div>
          <div className="price">$9.99</div>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
