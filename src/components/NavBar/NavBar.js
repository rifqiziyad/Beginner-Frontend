import React, { Component } from "react";
import { Button, Navbar, NavDropdown, Nav, Form } from "react-bootstrap";
import styles from "./Navbar.module.css";
import imgSearch from "../../assets/img/Search.png";

class NavBar extends Component {
  render() {
    return (
      <>
        <Navbar className={styles.navbar} expand="lg">
          <Navbar.Brand href="#home">SanS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className={styles.navLeft} href="#home">
                Movies
              </Nav.Link>
              <Nav.Link className={styles.navLeft} href="#link">
                Cinemas
              </Nav.Link>
              <Nav.Link className={styles.navLeft} href="#link">
                Buy Ticket
              </Nav.Link>
            </Nav>
            <Form inline className={styles.formRight}>
              <NavDropdown
                title="Location"
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
              <img className={styles.navRight} src={imgSearch} alt="Search" />
              <Button className={styles.button}>Sign In</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
