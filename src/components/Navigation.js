import React from 'react';
import { Navbar, Row, Col, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Profile } from './Profile';
import { Twitter, Discord, Telegram, Github  } from 'react-bootstrap-icons';


export function Navigation() {

    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">tETF</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="#action1"><Twitter /></Nav.Link>
              <Nav.Link href="#action2"><Discord /></Nav.Link>
              <Nav.Link href="#action2"><Telegram /></Nav.Link>
              <Nav.Link href="#action2"><Github /></Nav.Link>
            </Nav>
           <Container class="text-end">
               <Profile />
           </Container>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}