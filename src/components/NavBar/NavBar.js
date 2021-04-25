import React, { Component } from "react";
import { Row, Navbar, Col, Nav, Form } from "react-bootstrap";
import styles from "./Navbar.module.css";
import imgSearch from "../../assets/img/Search.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
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
              <Link className={styles.link} to="/">
                Home
              </Link>
              <Link className={styles.link} to="/payment">
                Payment
              </Link>
              <Link className={styles.link} to="/admin">
                Profile
              </Link>
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

export default NavBar;
