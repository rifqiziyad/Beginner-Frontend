import React, { Component } from "react";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import styles from "./payment.module.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import logoCinemaOne from "../../../assets/img/cineone21.png";

class Payment extends Component {
  render() {
    return (
      <>
        <NavBar />

        <Container>
          <Row className={styles.row1}>
            <Col className={styles.col1} xs={7}>
              <h2>Movie Selected</h2>
              <div className={styles.movieSelected}>
                <h2>Spider-Man: Homecoming</h2>
                <Button className={styles.buttonChange} variant="primary">
                  Change Movie
                </Button>
              </div>
              <h2>Choose Your Seat</h2>
              <div className={styles.chooseYourSeat}>lorem</div>
              <div className={styles.buttonCheckout}>
                <Button
                  className={styles.buttonCheckoutNow}
                  variant="outline-primary"
                >
                  Change your movie
                </Button>
                <Button
                  className={styles.buttonCheckoutNow}
                  variant="outline-primary"
                >
                  Checkout now
                </Button>
              </div>
            </Col>
            <Col className={styles.col2} xs={4}>
              <h2 className={styles.orderInfo}>Order Info</h2>
              <div className={styles.sideRight}>
                <img src={logoCinemaOne} alt="Cinema One 21" />
                <h1>CineOne21 Cinema</h1>
                <div className={styles.info}>
                  <div className={styles.movieName}>
                    <p>Movie Selected</p>
                    <h3>Spider-Man: Homecoming</h3>
                  </div>
                  <div className={styles.date}>
                    <p>Tuesday, 07 July 2020</p>
                    <h3>02:00pm</h3>
                  </div>
                  <div className={styles.oneTicketPrice}>
                    <p>One ticket price</p>
                    <h3>$10</h3>
                  </div>
                  <div className={styles.seatCoosed}>
                    <p>Seat choosed</p>
                    <h3>C4, C5, C6</h3>
                  </div>
                  <hr />
                  <div className={styles.totalPayment}>
                    <h5>Total Payment</h5>
                    <h4>$30</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Footer />
      </>
    );
  }
}

export default Payment;
