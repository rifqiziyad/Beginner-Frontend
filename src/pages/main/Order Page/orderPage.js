import React, { Component } from "react";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import styles from "./orderPage.module.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import logoCinemaOne from "../../../assets/img/cineone21.png";
import Seat from "../../../components/Seat/seat";
import { Link } from "react-router-dom";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeat: [],
      reservedSeat: ["A1", "A7", "A14"],
    };
  }
  bookingSeat = (seat) => {
    this.setState({
      selectedSeat: [...this.state.selectedSeat, seat],
    });
    console.log(seat);
  };

  render() {
    const { reservedSeat, selectedSeat } = this.state;
    return (
      <>
        <NavBar />
        <Container fluid className={styles.container}>
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
              <div className={styles.chooseYourSeat}>
                <Card className={styles.border}>
                  <Card.Body>
                    <Seat
                      seatAlphabet="A"
                      reserved={reservedSeat}
                      selected={selectedSeat}
                      bookingSeat={this.bookingSeat.bind(this)}
                    />
                    <Seat
                      seatAlphabet="B"
                      reserved={reservedSeat}
                      selected={selectedSeat}
                      bookingSeat={this.bookingSeat.bind(this)}
                    />
                    <Seat
                      seatAlphabet="C"
                      reserved={reservedSeat}
                      selected={selectedSeat}
                      bookingSeat={this.bookingSeat.bind(this)}
                    />
                    <Seat
                      seatAlphabet="D"
                      reserved={reservedSeat}
                      selected={selectedSeat}
                      bookingSeat={this.bookingSeat.bind(this)}
                    />
                    <Seat
                      seatAlphabet="E"
                      reserved={reservedSeat}
                      selected={selectedSeat}
                      bookingSeat={this.bookingSeat.bind(this)}
                    />
                    <Seat
                      seatAlphabet="F"
                      reserved={reservedSeat}
                      selected={selectedSeat}
                      bookingSeat={this.bookingSeat.bind(this)}
                    />
                    <Seat
                      seatAlphabet="G"
                      reserved={reservedSeat}
                      selected={selectedSeat}
                      bookingSeat={this.bookingSeat.bind(this)}
                    />
                  </Card.Body>
                  <Row className={styles.number}>
                    <Col md={6} className={styles.numberLeft}>
                      <p>1</p>
                      <p>2</p>
                      <p>3</p>
                      <p>4</p>
                      <p>5</p>
                      <p>6</p>
                      <p>7</p>
                    </Col>
                    {/* <Col md={1}></Col> */}
                    {/* <Col md={1}></Col> */}
                    <Col md={6} className={styles.numberRight}>
                      <p>8</p>
                      <p>9</p>
                      <p>10</p>
                      <p>11</p>
                      <p>12</p>
                      <p>13</p>
                      <p>14</p>
                    </Col>
                  </Row>
                </Card>
              </div>
              <div className={styles.buttonCheckout}>
                <Link
                  className={styles.buttonCheckoutNow}
                  variant="outline-primary"
                >
                  Change your movie
                </Link>
                <Link
                  to="/payment"
                  className={styles.buttonCheckoutNow}
                  variant="outline-primary"
                >
                  Checkout now
                </Link>
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
                    <h3>A1, A7, A14</h3>
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
