// import { Navbar, NavDropdown } from "react-bootstrap";
//import { Container } from "react-bootstrap";
//import Navbar from 'react-bootstrap/Navbar';
import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
// import { LinkContainer } from 'react-router-bootstrap';

export default function Navigation() {
    return (
        <div>
            <div>
                <>
                    <Navbar bg="dark" variant="dark">
                        <Container>
                            <Navbar.Brand href="/home">Eat Up</Navbar.Brand>
                            <Nav className="me-auto">
                                {/* <Nav.Link href="/home">Home</Nav.Link> */}
                                <Nav.Link href="/DrinksRecipe">Drinks recipes</Nav.Link>
                                <Nav.Link href="/recipes">Recipes</Nav.Link>
                                <Nav.Link href="/recipeCards">RecipeCards</Nav.Link>
                            </Nav>
                        </Container>
                    </Navbar>
                </>
            </div>
        </div>
    )
}
