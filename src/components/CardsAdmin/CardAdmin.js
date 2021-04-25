import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import styles from "./CardAdmin.module.css";

class CardAdmin extends Component {
  render() {
    const { movie_id, movie_name, movie_category } = this.props.data;
    const { handleUpdate, handleDelete, data } = this.props;
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
          <Col>
            <Button
              onClick={() => handleUpdate(data)}
              className={styles.buttonUpdate}
            >
              Update
            </Button>

            <Button
              onClick={() => handleDelete(movie_id)}
              className={styles.buttonDelete}
            >
              Delete
            </Button>
          </Col>
        </Col>
      </>
    );
  }
}

export default CardAdmin;
