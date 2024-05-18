import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardItemContainer from "./components/CardItemContainer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Container fluid className="bg-body-secondary ms-0 me-0">
        <Header />
      </Container>

      <Outlet />

      <Container fluid>
        <Footer />
      </Container>
    </>
  );
};
export default App;
