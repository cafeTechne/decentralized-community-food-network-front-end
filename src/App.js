import React from 'react';
import logo from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Button, Nav, Navbar, Form, FormControl, Container, Col, Row, NavDropdown, ButtonGroup } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'


import './App.css';

export default function App() {
  return (



    <Router>


      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

        <div className="d-lg-none">
        <Navbar.Brand href="/"><h2>D.C.N.F.</h2></Navbar.Brand>
        </div>

        <div className="d-none d-lg-block">
        <Navbar.Brand href="/"><h3>Decentralized Community Food Network</h3></Navbar.Brand>
        </div>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav justify-content-end">
          <Nav className="ml-auto" justify="true">


            <Nav.Item>
              <LinkContainer to="/signUp">
                <Nav.Link to="/signUp">

                  <ButtonGroup className="d-flex">
                    <Button variant="danger">
                      Join!
                </Button>
                  </ButtonGroup>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>


            <Nav.Item>
              <LinkContainer to="/contact">
                <Nav.Link to="/contact">
                  <ButtonGroup className="d-flex">
                    <Button variant="info">
                      Contact
                </Button>
                  </ButtonGroup>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>


            <Nav.Item>
              <LinkContainer to="/donate">
                <Nav.Link to="/donate">
                  <ButtonGroup className="d-flex">
                    <Button variant="success">
                      Donate
                </Button>
                  </ButtonGroup>
                </Nav.Link>
              </LinkContainer>
            </Nav.Item>


          </Nav>

        </Navbar.Collapse>
      </Navbar>


      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/signUp">
            <SignUp />
          </Route>

          <Route path="/contact">
            <Contact />
          </Route>


          <Route path="/donate">
            <Donate />
          </Route>


          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <div>
    <Container>
      <Row>
        <Col><h2>Home</h2></Col>
      </Row>
    </Container>
  </div>;
}

function SignUp() {
  return <div>
    <Container>
      <Row>
        <Col><h2>SignUp</h2></Col>
      </Row>
    </Container>
  </div>;

}

function Donate() {
  return <div>
    <Container>
      <Row>
        <Col><h2>Donate</h2></Col>
      </Row>
    </Container>
  </div>;
}

function Contact() {
  return <div>
    <Container>
      <Row>
        <Col><h2>Contact</h2></Col>
      </Row>
    </Container>
  </div>;
}

function HasLand() {
  return <h2>I have land!</h2>;
}

function HasHands() {
  return <h2>I have hands!</h2>;
}
