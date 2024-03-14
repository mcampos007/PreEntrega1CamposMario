import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { CartWidget } from "./CartWidget"
import logo from "../assets/logo_axion.png"
//import logo from "../../assets/logo.png"
export const NavBar = () =>{
    return (
        <Navbar bg="dark" className='container-fluid' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img 
              src={logo}
              height="60"
              className='d-inline-block align-top'
              alt="logo"            
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#" className="nav-link">Bar</Nav.Link>
            <Nav.Link href="#" className="nav-link">Bebidas</Nav.Link>
            <Nav.Link href="#" className="nav-link">Cigarrillos</Nav.Link>
          </Nav>
          <CartWidget />
        </Container>
       
      </Navbar>
    )
}



