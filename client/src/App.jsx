import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardItem from "./components/CardItem";

const App = () => {
  return (
    <>
      <Container fluid>
        <Header />
      </Container>

      <Container>
        <Row className="justify-content-md-center mb-5">
          <Col><CardItem /></Col>
          <Col><CardItem /></Col>
          <Col><CardItem /></Col>
          <Col><CardItem /></Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col><CardItem /></Col>
          <Col><CardItem /></Col>
          <Col><CardItem /></Col>
          <Col><CardItem /></Col>
        </Row>
      </Container>

      <Container fluid>
        <Footer />
      </Container>
    </>
  )
};
export default App;
