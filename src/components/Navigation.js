import React from 'react';
import { Navbar, Row, Col, Container, Nav } from 'react-bootstrap';
import { Profile } from './Profile';
import { Twitter, Discord, Telegram, Github  } from 'react-bootstrap-icons';
import { Account } from './Account';
import { Badge } from 'react-bootstrap'
import { trim } from '../utils/helpers'



export function Navigation(props) {

    return(
        <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">tETF</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
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
           <Row className="d-flex justify-content-between " style={styles.connectWallet}>
               <Col>
                {/* <Account /> */}
                {props.data.address && <Badge pill bg='primary'> {trim(props.data.address, -36)}</Badge>}
                </Col>
               <Col>
                <Profile style={styles.connectWallet}/>
               </Col>
           </Row>
        </Container>
      </Navbar>
    )
}

const styles = {
    connectWallet : {
        whiteSpace: 'nowrap',
        testAlign: 'center',
        marginRight: '1%'
    }
}