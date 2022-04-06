import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import logo from '../../images/logo/logo3.png';
import './navegation.css';

const Navegation = () => {
  return (
    <div>
        <Navbar collapseOnSelect expand="lg"  variant="dark" id='nav'>
            <Container>
              <LinkContainer to='/'>
                <Navbar.Brand href="#home" id='logobrand'>
                  <img src={logo} alt="" />
                </Navbar.Brand>
              </LinkContainer>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav>
                  <LinkContainer to='/'>
                    <Nav.Link href="#deets" id='link'>Home</Nav.Link>                  
                  </LinkContainer>
                  <LinkContainer to='/menu'>
                    <Nav.Link href="#deets" id='link'>Menu</Nav.Link>                  
                  </LinkContainer>
                  <LinkContainer to='/contact'>
                    <Nav.Link href="#deets" id='link'>Contact</Nav.Link>                  
                  </LinkContainer>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Navegation