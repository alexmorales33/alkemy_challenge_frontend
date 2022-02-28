import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import "./NavBar.css";
import { NavDropdown } from 'react-bootstrap';

const NavBar =()=>{

    const navigate = useNavigate();
    
    
    const logout =()=>{
        navigate('/')
        localStorage.removeItem('token')
    }

    return(

        <Navbar bg="dark" variant="dark">
            <Container fluid="md">
                <Navbar.Brand onClick={()=>{navigate('/inicio');}}>
                <i className="fa-solid fa-burger"></i>
                </Navbar.Brand>
                <Nav className="me-7">
                    <NavDropdown title="Menu" id="basic-nav-dropdown">
                        <NavDropdown.Item onClick={()=>{navigate('/vegan');}}>Vegan</NavDropdown.Item>
                        <NavDropdown.Item onClick={()=>{navigate('/meat');}}>Vegan't</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link onClick={()=> logout()}>LogOut</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default NavBar;