import React, { Component } from "react";
import { Button, Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

class Cards extends Component {
  handleMovieDetail = (id) => {
    // [1] = biasanya digunakan untuk handling pagination, sort, search
    // this.props.history.push(`/learning/basic-movie-detail?movieId=${id}`);
    // // [2] = jika datanya tidak mau ditampilkan di url
    // this.props.history.push(`/learning/basic-movie-detail?movieId=`, {
    //   data: id,
    // });
    // // [3] = bisa digunakan untuk detail product/data
    this.props.history.push(`/learning/basic-movie-detail/${id}`);
  };
  render() {
    console.log(this.props);
    const {
      movie_id,
      movie_name,
      movie_category,
      movie_release_date,
    } = this.props.data;
    const { handleUpdate, handleDelete, data } = this.props;
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://www.a1hosting.net/wp-content/themes/arkhost/assets/images/default.jpg"
          />
          <Card.Body>
            <Card.Title>{movie_name}</Card.Title>
            <Card.Text>{movie_category}</Card.Text>
            <p>{movie_release_date}</p>
            <Button
              variant="primary"
              onClick={() => this.handleMovieDetail(movie_id)}
            >
              Detail
            </Button>
            <Button variant="primary" onClick={() => handleUpdate(data)}>
              Update
            </Button>
            <Button variant="danger" onClick={() => handleDelete(movie_id)}>
              {" "}
              Delete
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default withRouter(Cards);
