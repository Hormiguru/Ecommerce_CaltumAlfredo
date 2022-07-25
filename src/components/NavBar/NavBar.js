import React from 'react'

// importamos lo de bt
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';

// importamos el CartWidjet
import CartWidget from '../CartWidget/CartWidget';


export const NavBar = () => {
    return (
        <Navbar bg="light" expand="lg" >
            <Container>
                <Link to='/'>
                    <Navbar.Brand>Pet & More</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink to='/' className={({ isActive }) => isActive ? 'Sombra' : 'SinSombra'}>Home</NavLink>
                        <NavLink to='/categoria/adultos'> Adultos </NavLink>
                        <NavLink to='/categoria/cachorros'> Cachorros </NavLink>
                    </Nav>
                </Navbar.Collapse>
                <Link to='/cart'>
                    <CartWidget />
                </Link>
            </Container>
        </Navbar>
    );
}

// Exportamos el NavBar
export default NavBar;

