import React from 'react'
import {
    Navbar,
    Nav,
    Container
} from 'react-bootstrap';

const mainNavBar = props =>(
    <>
    <Navbar expand="md" bg="dark" variant="dark" sticky= "top">
    <Container>
        <Navbar.Brand href="home">WebSki</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">       
            <Nav className="mr-auto">
            <Nav.Link href="home">Strona główna</Nav.Link>
            <Nav.Link href="slopes">Nasze stoki</Nav.Link>
            <Nav.Link href="pricing">Ceny</Nav.Link>
            </Nav>      
        </Navbar.Collapse>
    </Container>
    </Navbar>
    </>
)

export default mainNavBar;