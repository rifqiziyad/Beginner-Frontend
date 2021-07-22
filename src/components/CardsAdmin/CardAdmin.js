import React, { Component } from "react";
import { Col, Button } from "react-bootstrap";
import styles from "./CardAdmin.module.css";
import imgDefault from "../../assets/img/default.jpg";

class CardAdmin extends Component {
  render() {
    const { movie_id, movie_name, movie_category, movie_image } =
      this.props.data;
    const { handleUpdate, handleDelete, data } = this.props;
    return (
      <>
        {" "}
        <Col className={styles.imgCard}>
          {movie_image.length > 0 ? (
            <img
              src={`https://ticket-sans.herokuapp.com/backend1/api/${movie_image}`}
              alt=""
            />
          ) : (
            <img src={imgDefault} alt="" />
          )}
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
