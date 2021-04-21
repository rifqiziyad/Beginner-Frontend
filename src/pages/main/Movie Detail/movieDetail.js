import React, { Component } from "react";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import {
  Container,
  Row,
  Col,
  Form,
  NavDropdown,
  Button,
} from "react-bootstrap";
import styles from "./movieDetail.module.css";
import imgDetail from "../../../assets/img/card-movie1.png";
import logoLocation from "../../../assets/img/logo location.png";
import logoEbu from "../../../assets/img/ebu.id.png";

class movieDetail extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container fluid className={styles.container}>
          <Row className={styles.row}>
            <Col md={3}>
              <div className={styles.col1}>
                <img src={imgDetail} alt="imgDetail" />
              </div>
            </Col>
            <Col className={styles.col2} md={7}>
              <h2>Spider-Man: Homecoming</h2>
              <h1>Adventure, Action, Sci-Fi</h1>
              <div className={styles.content}>
                <div className={styles.info1}>
                  <div className={styles.releaseDate}>
                    <p>Release date</p>
                    <h3>June 28, 2017</h3>
                  </div>
                  <div className={styles.directed}>
                    <p>Directed by</p>
                    <h3>Jon Watss</h3>
                  </div>
                </div>
                <div className={styles.info2}>
                  <div className={styles.duration}>
                    <p>Duration</p>
                    <h3>2 hours 13 minutes </h3>
                  </div>
                  <div className={styles.casts}>
                    <p>cats</p>
                    <h3>Tom Holland, Michael Keaton, Robert Downey Jr., ...</h3>
                  </div>
                </div>
              </div>
              <hr />
              <h5>Synopsis</h5>
              <p className={styles.synopsis}>
                Thrilled by his experience with the Avengers, Peter returns
                home, where he lives with his Aunt May, under the watchful eye
                of his new mentor Tony Stark, Peter tries to fall back into his
                normal daily routine - distracted by thoughts of proving himself
                to be more than just your friendly neighborhood Spider-Man - but
                when the Vulture emerges as a new villain, everything that Peter
                holds most important will be threatened.
              </p>
            </Col>
          </Row>

          <div className={styles.showtimes}>
            <h2>Showtimes and Tickets</h2>
            <Row className={styles.dateLocation}>
              <div>
                <Form.Control type="date" name="premiereDate" />
              </div>
              <div className={styles.location}>
                <img src={logoLocation} alt="logoLocation" />
                <NavDropdown
                  className={styles.titleLocation}
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
              </div>
            </Row>
          </div>
          <div className={styles.cards}>
            <div className={styles.cinemaCard}>
              <div className={styles.cinema}>
                <img src={logoEbu} alt="ebu.id" />
                <div className={styles.address}>
                  <h2>Ebv.id</h2>
                  <p>Whatever street No.12, South Purwokerto</p>
                </div>
              </div>
              <hr />
              <div className={styles.time}>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
              </div>
              <div className={styles.price}>
                <h1>Price</h1>
                <h5>$10.00/seat</h5>
              </div>
              <div className={styles.buttonBookNow}>
                <Button variant="light">Book Now</Button>
                <Button variant="light">Add to cart</Button>
              </div>
            </div>
            <div className={styles.cinemaCard}>
              <div className={styles.cinema}>
                <img src={logoEbu} alt="ebu.id" />
                <div className={styles.address}>
                  <h2>Ebv.id</h2>
                  <p>Whatever street No.12, South Purwokerto</p>
                </div>
              </div>
              <hr />
              <div className={styles.time}>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
              </div>
              <div className={styles.price}>
                <h1>Price</h1>
                <h5>$10.00/seat</h5>
              </div>
              <div className={styles.buttonBookNow}>
                <Button className={styles.btn} variant="light">
                  Book Now
                </Button>
                <Button className={styles.btn} variant="light">
                  Add to cart
                </Button>
              </div>
            </div>
            <div className={styles.cinemaCard}>
              <div className={styles.cinema}>
                <img src={logoEbu} alt="ebu.id" />
                <div className={styles.address}>
                  <h2>Ebv.id</h2>
                  <p>Whatever street No.12, South Purwokerto</p>
                </div>
              </div>
              <hr />
              <div className={styles.time}>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
                <h3>08:30am</h3>
              </div>
              <div className={styles.price}>
                <h1>Price</h1>
                <h5>$10.00/seat</h5>
              </div>
              <div className={styles.buttonBookNow}>
                <Button className={styles.btn} variant="light">
                  Book Now
                </Button>
                <Button className={styles.btn} variant="light">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </Container>

        <Footer />
      </>
    );
  }
}

export default movieDetail;
