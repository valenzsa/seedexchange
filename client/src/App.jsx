import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardItemContainer from "./components/CardItemContainer";

const App = () => {
  return (
    <>
      <Container fluid className="bg-body-secondary ms-0 me-0">
        <Header />
      </Container>

      <Container>
        <Row className="justify-content-md-center mb-5">
          <CardItemContainer />
        </Row>
      </Container>

      <Container fluid>
        <Footer />
      </Container>
    </>
  );
};
export default App;
