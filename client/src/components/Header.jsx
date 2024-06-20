import {
  Button,
  Container,
  Form,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useGetProductsQuery } from "../slices/productsApiSlice";

const Header = () => {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <Navbar expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Seed Exchange</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <NavDropdown title="Vegetable Seeds" id="navbarScrollingDropdown">
              {products?.map((product) => {
                return (
                  <NavDropdown.Item
                    key={`${product._id}`}
                    href={`/products/${product._id}`}
                  >
                    {product.name}
                  </NavDropdown.Item>
                );
              })}

              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Flower Seeds" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav>
            <Nav.Link href="#">My Account</Nav.Link>
            <Nav.Link href="#">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default Header;
