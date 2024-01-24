import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css'
function NavBar() {
  return (
    <>
       <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand  href="#home"><img className='logo'  src="https://cdn-icons-png.flaticon.com/128/828/828460.png" alt="logo1" /></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#men">Men</Nav.Link>
            <Nav.Link href="#women">Women</Nav.Link>
            <Nav.Link href="#cartWidget">  < CartWidget/>  </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;