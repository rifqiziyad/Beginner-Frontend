import React, { Component } from "react";
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
// import styles from "./Admin.module.css";
import NavbarAdmin from "../../../components/NavBar Admin/NavbarAdmin";
import styles from "./Admin.module.css";
import cardImg from "../../../assets/img/card-movie1.png";
import card1 from "../../../assets/img/card-movie1.png";
import Footer from "../../../components/Footer/Footer";

class Admin extends Component {
  render() {
    return (
      <>
        <NavbarAdmin />

        <Container fluid className={styles.container}>
          <Row className={styles.rowMain}>
            <h2>Form Movie</h2>
            <Row className={styles.row}>
              <Col className={styles.partImg} md={2}>
                <div className={styles.cardMovie}>
                  <img src={cardImg} alt="" />
                </div>
              </Col>
              <Col className={styles.info1} md={5}>
                <div className={styles.movieInfo}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.label}>Movie Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Movie Name"
                      name="movieName"
                      className={styles.inputName}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.label}>Director</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Director Name"
                      name="movieName"
                      className={styles.inputName}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.label}>
                      Movie Release Date
                    </Form.Label>
                    <Form.Control
                      type="date"
                      name="movieReleaseDate"
                      className={styles.inputName}
                    />
                  </Form.Group>
                </div>
              </Col>
              <Col className={styles.info2} md={5}>
                <div className={styles.movieInfo}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.label}>Category</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Movie Category"
                      name="movieName"
                      className={styles.inputName}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label className={styles.label}>Cats</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Input Cats"
                      name="movieName"
                      className={styles.inputName}
                    />
                  </Form.Group>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Row>
                      <Col>
                        <Form.Label className={styles.label}>
                          Duration Hour
                        </Form.Label>
                        <Form.Control
                          type="number"
                          name="movieReleaseDate"
                          placeholder="Input Hour"
                          className={styles.inputName}
                        />
                      </Col>
                      <Col>
                        <Form.Label className={styles.label}>
                          Duration Minute
                        </Form.Label>
                        <Form.Control
                          type="number"
                          name="movieReleaseDate"
                          placeholder="Input Minute"
                          className={styles.inputName}
                        />
                      </Col>
                    </Row>
                  </Form.Group>
                </div>
              </Col>
              <Col className={styles.synopsis}>
                <Form.Label className={styles.label}>Synopsis</Form.Label>
                <div className={styles.inputName}>
                  Thrilled by his experience with the Avengers, Peter returns
                  home, where he lives with his Aunt May, |
                </div>
              </Col>
            </Row>
            <Col className={styles.btn}>
              <Button
                className={styles.buttonReset}
                variant="light"
                type="reset"
              >
                Reset
              </Button>
              <Button
                className={styles.buttonSubmit}
                variant="light"
                type="reset"
              >
                Submit
              </Button>
            </Col>
          </Row>
          <Row className={styles.row2}>
            <Col className={styles.h2} md={8}>
              Date Movie
            </Col>
            <Col>
              <Row>
                <Col md={3}>
                  <Dropdown>
                    <Dropdown.Toggle
                      className={styles.sort}
                      variant="light"
                      id="dropdown-basic"
                    >
                      Sort
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col className={styles.inputMovieName}>
                  <Form.Control
                    type="text"
                    name="Search"
                    placeholder="Search Movie Name..."
                    className={styles.inputName}
                  />
                </Col>
              </Row>
            </Col>
            <div className={styles.cards}>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonUpdate}>Update</p>
                <p className={styles.buttonDelete}>Delete</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonUpdate}>Update</p>
                <p className={styles.buttonDelete}>Delete</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonUpdate}>Update</p>
                <p className={styles.buttonDelete}>Delete</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonUpdate}>Update</p>
                <p className={styles.buttonDelete}>Delete</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonUpdate}>Update</p>
                <p className={styles.buttonDelete}>Delete</p>
              </div>
            </div>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Admin;
