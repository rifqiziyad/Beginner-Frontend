import React, { Component } from "react";
import { Col } from "react-bootstrap";
import styles from "./CardAdmin.module.css";

class CardAdmin extends Component {
  render() {
    const { movie_name, movie_category } = this.props.data;
    return (
      <>
        {" "}
        <Col className={styles.imgCard}>
          <img
            src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
            alt=""
          />
          <p className={styles.movieName}>{movie_name}</p>
          <p className={styles.genre}>{movie_category} </p>
          <p className={styles.buttonUpdate}>Update</p>
          <p className={styles.buttonDelete}>Delete</p>
        </Col>
      </>
    );
  }
}

export default CardAdmin;
