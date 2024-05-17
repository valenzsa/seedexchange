import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardItem from "./components/CardItem";

const App = () => {
  return (
    <>
      <Container fluid className="bg-body-secondary ms-0 me-0">
        <Header />
      </Container>

      <Container>
        <Row className="justify-content-md-center mb-5">
          <Col lg={3} md={3} sm={3} xs={12} className="mb-3">
            <CardItem />
          </Col>
          <Col lg={3} md={3} sm={3} xs={12} className="mb-3">
            <CardItem />
          </Col>
          <Col lg={3} md={3} sm={3} xs={12} className="mb-3">
            <CardItem />
          </Col>
          <Col lg={3} md={3} sm={3} xs={12} className="mb-3">
            <CardItem />
          </Col>
          <Col lg={3} md={3} sm={3} xs={12} className="mb-3">
            <CardItem />
          </Col>
          <Col lg={3} md={3} sm={3} xs={12} className="mb-3">
            <CardItem />
          </Col>
          <Col lg={3} md={3} sm={3} xs={12} className="mb-3">
            <CardItem />
          </Col>
          <Col lg={3} md={3} sm={3} xs={12} className="mb-3">
            <CardItem />
          </Col>
        </Row>
      </Container>

      <Container fluid>
        <Footer />
      </Container>
    </>
  );
};
export default App;
