import { Button, Card } from 'react-bootstrap';

const CardItem = () => {
  return (
    <Card>
      <Card.Img variant="top" src="https://placehold.co/300x150" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the cards content.
        </Card.Text>
        <Card.Text className="prices d-flex g-5" as="div">
          <div className="old-price">$19.99</div>
          <div className="price">$9.99</div>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  )
}

export default CardItem