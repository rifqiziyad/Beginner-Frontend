import React, { Component } from "react";
import { Row, Navbar, Col, Nav, Form, Button } from "react-bootstrap";
import styles from "./Navbar.module.css";
import imgSearch from "../../assets/img/Search.png";
import { Link } from "react-router-dom";

class NavBar extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // componentDidMount() {
  //   this.handleSignIn();
  // }

  handleSignIn = () => {
    this.props.history.push("/login");
    console.log("Sign In");
  };

  handleSignOut = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

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
              <Link className={styles.link} to="/profile">
                Profile
              </Link>
            </Nav>
            <Form>
              <Row>
                <Row className={styles.inputMovieName}>
                  <Col md={2} className={styles.imgSearchMovie}>
                    <img className={styles.imgSearch} src={imgSearch} alt="" />
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
                <Button
                  onClick={
                    localStorage.getItem("token")
                      ? this.handleSignOut
                      : this.handleSignIn
                  }
                  variant="light"
                  className={styles.button}
                >
                  {localStorage.getItem("token") ? "Sign Out" : "Sign In"}
                </Button>
              </Row>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
