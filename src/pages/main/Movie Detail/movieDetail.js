import React, { Component } from "react";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./movieDetail.module.css";
import moment from "moment";
import imgDefault from "../../../assets/img/default.jpg";
import { connect } from "react-redux";
import { getMovieById } from "../../../redux/actions/movie";
import axiosApiIntances from "../../../utils/axios";
import Swal from "sweetalert2";

class movieDetail extends Component {
  constructor() {
    super();
    this.state = {
      premiereData: [],
      hour: "",
      premiere_id: 0,
    };
  }

  componentDidMount() {
    this.getDataById();
    this.getPremiereData();
  }

  getDataById = () => {
    const movieId = this.props.match.params.id;
    this.props.getMovieById(movieId);
  };

  getPremiereData = () => {
    axiosApiIntances
      .get("/premiere")
      .then((res) => {
        this.setState({ premiereData: res.data.data });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  handleClock = (data) => {
    const hour = `${data.show_time_clock.split(":")[0]}:${
      data.show_time_clock.split(":")[1]
    }`;
    this.setState({ hour, premiere_id: data.premiere_id });
  };

  redirectedOrderPage = (image, name, price) => {
    if (this.state.hour === "") {
      Swal.fire({
        title: "Select hour",
        confirmButtonText: "Ok",
      });
    } else {
      localStorage.setItem("premiere_image", image);
      localStorage.setItem("premiere_name", name);
      localStorage.setItem("premiere_price", price);
      localStorage.setItem("hour", this.state.hour);
      this.props.history.push("/order-page");
    }
  };

  convertTime = (data) => {
    return `${data.split(":")[0]}:${data.split(":")[1]}`;
  };

  render() {
    const {
      casts,
      directed,
      duration_hour,
      duration_minute,
      movie_category,
      movie_image,
      movie_name,
      movie_release_date,
      synopsis,
    } = this.props.movieByid.dataMovie[0];
    return (
      <>
        <NavBar {...this.props} />
        <Container fluid className={styles.container}>
          <Row className={styles.row}>
            <Col md={3} className={styles.colImage}>
              <div className={styles.col1}>
                {movie_image ? (
                  <img
                    src={`https://ticket-sans.herokuapp.com/backend1/api/${movie_image}`}
                    alt=""
                  />
                ) : (
                  <img src={imgDefault} alt="" />
                )}
              </div>
            </Col>
            <Col className={styles.col2} md={7}>
              <h2>{movie_name}</h2>
              <h1>{movie_category}</h1>
              <div className={styles.content}>
                <div className={styles.info1}>
                  <div className={styles.releaseDate}>
                    <p>Release date</p>
                    <h3>{moment(movie_release_date).format("ll")}</h3>
                  </div>
                  <div className={styles.directed}>
                    <p>Directed by</p>
                    <h3>{directed}</h3>
                  </div>
                </div>
                <div className={styles.info2}>
                  <div className={styles.duration}>
                    <p>Duration</p>
                    <h3>
                      {duration_hour} hours {duration_minute} minutes{" "}
                    </h3>
                  </div>
                  <div className={styles.casts}>
                    <p>cats</p>
                    <h3>{casts}</h3>
                  </div>
                </div>
              </div>
              <hr />
              <h5>Synopsis</h5>
              <p className={styles.synopsis}>{synopsis}</p>
            </Col>
          </Row>

          <div className={styles.cards}>
            {this.state.premiereData.map((item, index) => {
              return (
                <div className={styles.cinemaCard} key={index}>
                  <div className={styles.cinema}>
                    <img
                      src={`https://ticket-sans.herokuapp.com/backend1/api/${item.premiere_image}`}
                      alt=""
                    />
                    <div className={styles.address}>
                      <h2>{item.premiere_name}</h2>
                      <p>{item.location_address}</p>
                    </div>
                  </div>
                  <hr />
                  <div className={styles.showTime}>
                    {item.show_time.length <= 0 ? (
                      <h5>Tidak Tersedia</h5>
                    ) : (
                      item.show_time.map((it, ind) => {
                        return (
                          <div
                            className={
                              this.state.hour ===
                                this.convertTime(it.show_time_clock) &&
                              it.premiere_id === this.state.premiere_id
                                ? styles.clickTime
                                : styles.time
                            }
                            key={ind}
                            onClick={() => {
                              this.handleClock(it);
                            }}
                          >
                            <h3>{this.convertTime(it.show_time_clock)}</h3>
                          </div>
                        );
                      })
                    )}
                  </div>
                  <div className={styles.price}>
                    <h1>Price</h1>
                    <h5>${item.premiere_price}/seat</h5>
                  </div>
                  <div className={styles.buttonBookNow}>
                    <button
                      onClick={() =>
                        this.redirectedOrderPage(
                          item.premiere_image,
                          item.premiere_name,
                          item.premiere_price
                        )
                      }
                      className={styles.bookNow}
                      variant="light"
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
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

export default connect(mapStateToProps, mapDispatchProps)(movieDetail);
