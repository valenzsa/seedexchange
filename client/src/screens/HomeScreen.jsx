import { Container } from "react-bootstrap";
import CardItemContainer from "../components/CardItemContainer";

const HomeScreen = () => {
  return (
    <Container>
      <h1 className="mb-4">Latest Products</h1>
      <CardItemContainer />
    </Container>
  );
};
export default HomeScreen;
