import React, { Component } from "react";
import { Row, Navbar, Col, Nav, Form } from "react-bootstrap";
import styles from "./NavbarAdmin.module.css";
import imgSearch from "../../assets/img/Search.png";
import { Link } from "react-router-dom";

class NavbarAdmin extends Component {
  render() {
    return (
      <>
        <Navbar className={styles.navbar} expand="lg">
          <Link className={styles.linkBrand} to="/">
            SanS
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className={styles.navLeft} href="#a">
                Dashboard
              </Nav.Link>
              <Nav.Link className={styles.navLeft} href="#b">
                Manage Movie
              </Nav.Link>
              <Nav.Link className={styles.navLeft} href="#c">
                Manage Schedule
              </Nav.Link>
            </Nav>
            <Row className={styles.inputMovieName}>
              <Col md={2} className={styles.imgSearchMovie}>
                <img
                  className={styles.imgSearch}
                  src={imgSearch}
                  alt="Search"
                />
              </Col>

              <Col md={10} className={styles.inputSearch}>
                <Form.Control
                  type="text"
                  name="Search"
                  placeholder="Search Movie Name..."
                  className={styles.inputName}
                />
              </Col>
            </Row>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavbarAdmin;
