import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CardItemContainer from "./components/CardItemContainer";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Container fluid className="bg-body-secondary ms-0 me-0 mb-5">
        <Header />
      </Container>

      <Outlet />

      <Container fluid className="mt-auto py-3 bg-light">
        <Footer />
      </Container>
    </>
  );
};
export default App;
