import React, { Component } from "react";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import styles from "./orderPage.module.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import Seat from "../../../components/Seat/seat";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMovieById } from "../../../redux/actions/movie";
import Swal from "sweetalert2";

class Payment extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeat: [],
      reservedSeat: ["A1", "A7", "A14"],
    };
  }

  componentDidUpdate() {
    localStorage.setItem("seat", this.state.selectedSeat);
  }

  bookingSeat = (seat) => {
    if (this.state.selectedSeat.includes(seat)) {
      const indexSeat = this.state.selectedSeat.indexOf(seat);
      this.state.selectedSeat.splice(indexSeat, 1);
      this.setState({ selectedSeat: this.state.selectedSeat });
    } else {
      this.setState({
        selectedSeat: [...this.state.selectedSeat, seat],
      });
    }
  };

  handleChangeMovie = () => {
    this.props.history.push("/");
  };

  handleCheckoutNow = () => {
    if (this.state.selectedSeat.length <= 0) {
      Swal.fire({
        title: "Please choose a seat !",
        confirmButtonText: "Ok",
      });
    } else {
      this.props.history.push("/payment");
    }
  };

  render() {
    const { reservedSeat, selectedSeat } = this.state;
    const { movie_name } = this.props.movieByid.dataMovie[0];
    let today = new Date();
    let day = today.getDay();
    let daylist = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday ",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = today.getDate();
    let month = today.getMonth();
    let monthList = [
      "Januari",
      "Februari",
      "Maret",
      "April",
      "Mei",
      "Juni",
      "Juli",
      "Agustus",
      "September",
      "Oktober",
      "November",
      "Desember",
    ];
    let year = today.getFullYear();
    localStorage.setItem(
      "date",
      `${daylist[day]}, ${date} ${monthList[month]} ${year}`
    );
    localStorage.setItem("movie_name", movie_name);
    return (
      <>
        <NavBar {...this.props} />
        <Container fluid className={styles.container}>
          <Row className={styles.row1}>
            <Col className={styles.col1} md={8}>
              <h2>Movie Selected</h2>
              <div className={styles.movieSelected}>
                <h2>{movie_name}</h2>
                <Button
                  onClick={this.handleChangeMovie}
                  className={styles.buttonChange}
                  variant="primary"
                >
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
                  to="/"
                >
                  Change your movie
                </Link>
                <Link
                  className={styles.buttonCheckoutNow}
                  variant="outline-primary"
                  onClick={this.handleCheckoutNow}
                >
                  Checkout now
                </Link>
              </div>
            </Col>
            <Col className={styles.col2}>
              <h2 className={styles.orderInfo}>Order Info</h2>
              <div className={styles.sideRight}>
                <img
                  src={`http://localhost:3001/backend1/api/${localStorage.getItem(
                    "premiere_image"
                  )}`}
                  alt="Cinema One 21"
                />
                <h1>{localStorage.getItem("premiere_name")}</h1>
                <div className={styles.info}>
                  <div className={styles.movieName}>
                    <p>Movie Selected</p>
                    <h3>{movie_name}</h3>
                  </div>
                  <div className={styles.date}>
                    <p>
                      {daylist[day]}, {date} {monthList[month]} {year}
                    </p>
                    <h3>{localStorage.getItem("hour")}</h3>
                  </div>
                  <div className={styles.oneTicketPrice}>
                    <p>One ticket price</p>
                    <h3>${localStorage.getItem("premiere_price")}</h3>
                  </div>
                  <div className={styles.seatCoosed}>
                    <p>Seat choosed</p>
                    <h3>{selectedSeat.join(",")}</h3>
                  </div>
                  <hr />
                  <div className={styles.totalPayment}>
                    <h5>Total Payment</h5>
                    <h4>
                      $
                      {localStorage.getItem("premiere_price") *
                        selectedSeat.length}
                    </h4>
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

const mapStateToProps = (state) => ({
  movieByid: state.movie,
});

const mapDispatchProps = { getMovieById };

export default connect(mapStateToProps, mapDispatchProps)(Payment);
