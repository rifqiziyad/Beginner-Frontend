import React, { Component } from "react";
import styles from "./MovieDetail.module.css";
import NavBar from "../../../components/learning/NavBar";
import { Container } from "react-bootstrap";

class MovieDetail extends Component {
  render() {
    console.log(this.props.location.search);
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1>MovieDetail Page !</h1>
          <NavBar />
        </Container>
      </>
    );
  }
}

export default MovieDetail;