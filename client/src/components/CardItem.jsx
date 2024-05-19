import { Button, Card } from "react-bootstrap";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const CardItem = ({
  id,
  name,
  image,
  oldPrice,
  price,
  rating,
  numberOfReviews,
}) => {
  return (
    <Card>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text
          className="ratings mb-2 d-flex align-items-baseline"
          as="div"
        >
          <div className="star-ratings">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaRegStar />
          </div>
          <div className="number-of-reviews">{numberOfReviews} Reviews</div>
        </Card.Text>
        <Card.Text
          className="prices d-flex mb-3"
          style={{ gap: "10px", alignItems: "baseline" }}
          as="div"
        >
          <div className="old-price text-decoration-line-through text-black-50">
            ${oldPrice}
          </div>
          <div className="price">${price}</div>
        </Card.Text>
        <Button variant="primary">Add To Cart</Button>
      </Card.Body>
    </Card>
  );
};

export default CardItem;
