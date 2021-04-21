import React, { Component } from "react";
import styles from "./MovieDetail.module.css";
import NavBar from "../../../components/learning/NavBar";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Seat from "../../../components/learning/Seat/seat";
// import qs from "query-string";

class MovieDetail extends Component {
  constructor() {
    super();
    this.state = {
      selectedSeat: [],
      reservedSeat: ["A1", "A7", "A14"],
    };
  }
  componentDidMount() {
    // [1]
    // const urlParam = qs.parse(this.props.location.search);
    // [2]
    console.log(this.props.location.state);
    // [3]
    console.log(this.props.match.params);
    // console.log(urlParam.movieId);
    // untuk page movie detail ----------------------
    // proses get data movie by id
    // proses get data premiere/bioskop by id
    // untuk page movie detail ----------------------
  }

  bookingSeat = (seat) => {
    this.setState({
      selectedSeat: [...this.state.selectedSeat, seat],
    });
    console.log(seat);
  };

  booking = () => {
    console.log("booking");
    const booking = JSON.stringify(this.state.selectedSeat);
    localStorage.setItem("bookingSeat", booking);
  };

  render() {
    const { reservedSeat, selectedSeat } = this.state;
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1 className={`${styles.headingColor} mr-auto`}>
            MovieDetail Page !
          </h1>
          <NavBar />
          <hr />
          <Row>
            <Col md={8}>
              <Card>
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
                </Card.Body>
                <Card.Body>
                  <Button
                    variant="primary"
                    size="md"
                    block
                    onClick={this.booking}
                  >
                    Booking
                  </Button>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default MovieDetail;
