import React, { Component } from "react";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import { Container, Row, Col, Form, NavDropdown } from "react-bootstrap";
import styles from "./movieDetail.module.css";
import logoLocation from "../../../assets/img/logo location.png";
import logoEbu from "../../../assets/img/ebu.id.png";
// import axiosApiIntances from "../../../utils/axios";
import moment from "moment";
import imgDefault from "../../../assets/img/default.jpg";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getMovieById } from "../../../redux/actions/movie";

class movieDetail extends Component {
  constructor() {
    super();
    this.state = {
      form: {},
    };
  }

  componentDidMount() {
    this.getDataById();
  }

  getDataById = () => {
    const movieId = this.props.match.params.id;
    this.props.getMovieById(movieId);

    // axiosApiIntances
    //   .get(`/movie/${movieId}`)
    //   .then((res) => {
    //     this.setState({ form: res.data.data[0] });
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  render() {
    console.log(this.props);
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
        <NavBar />
        <Container fluid className={styles.container}>
          <Row className={styles.row}>
            <Col md={3}>
              <div className={styles.col1}>
                {movie_image.length > 0 ? (
                  <img
                    src={`http://localhost:3001/backend1/api/${movie_image}`}
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

          <div className={styles.showtimes}>
            <h2>Showtimes and Tickets</h2>
            <Row className={styles.dateLocation}>
              <div>
                <Form.Control type="date" name="premiereDate" />
              </div>
              <div className={styles.location}>
                <img src={logoLocation} alt="logoLocation" />
                <NavDropdown
                  className={styles.titleLocation}
                  title="Location"
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </div>
            </Row>
          </div>
          <div className={styles.cards}>
            <div className={styles.cinemaCard}>
              <div className={styles.cinema}>
                <img src={logoEbu} alt="ebu.id" />
                <div className={styles.address}>
                  <h2>Ebv.id</h2>
                  <p>Whatever street No.12, South Purwokerto</p>
                </div>
              </div>
              <hr />
              <div className={styles.time}>
                <h3>08:30am</h3>
                <h3>09:30am</h3>
                <h3>11:30am</h3>
                <h3>02:30pm</h3>
                <h3>03:30pm</h3>
                <h3>05:30pm</h3>
                <h3>07:30pm</h3>
              </div>
              <div className={styles.price}>
                <h1>Price</h1>
                <h5>$10.00/seat</h5>
              </div>
              <div className={styles.buttonBookNow}>
                <Link
                  to="/order-page"
                  className={styles.bookNow}
                  variant="light"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className={styles.cinemaCard}>
              <div className={styles.cinema}>
                <img src={logoEbu} alt="ebu.id" />
                <div className={styles.address}>
                  <h2>Ebv.id</h2>
                  <p>Whatever street No.12, South Purwokerto</p>
                </div>
              </div>
              <hr />
              <div className={styles.time}>
                <h3>08:30am</h3>
                <h3>09:30am</h3>
                <h3>11:30am</h3>
                <h3>02:30pm</h3>
                <h3>03:30pm</h3>
                <h3>05:30pm</h3>
                <h3>07:30pm</h3>
              </div>
              <div className={styles.price}>
                <h1>Price</h1>
                <h5>$10.00/seat</h5>
              </div>
              <div className={styles.buttonBookNow}>
                <Link
                  to="/order-page"
                  className={styles.bookNow}
                  variant="light"
                >
                  Book Now
                </Link>
              </div>
            </div>
            <div className={styles.cinemaCard}>
              <div className={styles.cinema}>
                <img src={logoEbu} alt="ebu.id" />
                <div className={styles.address}>
                  <h2>Ebv.id</h2>
                  <p>Whatever street No.12, South Purwokerto</p>
                </div>
              </div>
              <hr />
              <div className={styles.time}>
                <h3>08:30am</h3>
                <h3>09:30am</h3>
                <h3>11:30am</h3>
                <h3>02:30pm</h3>
                <h3>03:30pm</h3>
                <h3>05:30pm</h3>
                <h3>07:30pm</h3>
              </div>
              <div className={styles.price}>
                <h1>Price</h1>
                <h5>$10.00/seat</h5>
              </div>
              <div className={styles.buttonBookNow}>
                <Link
                  to="/order-page"
                  className={styles.bookNow}
                  variant="light"
                >
                  Book Now
                </Link>
              </div>
            </div>
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
