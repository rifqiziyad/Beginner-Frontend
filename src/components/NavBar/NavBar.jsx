import React, { Component } from "react";
import { Row, Navbar, Col, Nav, Form, Button } from "react-bootstrap";
import styles from "./Navbar.module.css";
import imgSearch from "../../assets/img/Search.png";
import { Link } from "react-router-dom";
import axiosApiIntances from "../../utils/axios";
import imgDefault from "../../assets/img/default.jpg";
import { connect } from "react-redux";
import Swal from "sweetalert2";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      search: "",
      dataMovie: [],
      id: "",
    };
  }

  componentDidMount() {}

  handleSignIn = () => {
    this.props.history.push("/register");
  };

  handleSignOut = () => {
    localStorage.clear();
    this.props.history.push("/");
  };

  handleParams = (data) => {
    this.props.history.push(`/movie-detail/${data.movie_id}`);
  };

  changeText = (event) => {
    this.setState({ search: event.target.value, isShow: true });
    axiosApiIntances
      .get(
        `movie?page=${1}&limit=${100}&search=${
          this.state.search
        }&sort=movie_id DESC`
      )
      .then((res) => {
        this.setState({ dataMovie: res.data.data });
      });
  };

  handleCancel = () => {
    if (this.state.isShow) {
      this.setState({ isShow: false });
      this.setState({ search: "" });
    }
  };

  handlePayment = () => {
    if (localStorage.getItem("seat") === null) {
      Swal.fire({
        title: "Please select movie and seat first",
        confirmButtonText: "Ok",
        allowOutsideClick: false,
      }).then((result) => {
        if (result.isConfirmed) {
          this.props.history.push("/");
        }
      });
    } else {
      this.props.history.push("/payment");
    }
  };

  render() {
    const { isShow } = this.state;
    return (
      <>
        <Navbar className={styles.navbar} expand="lg">
          <Link className={styles.linkBrand} to="/">
            SanS
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {this.props.user.user_role === 0 ? (
              <Nav className="mr-auto">
                <Link className={styles.link} to="/">
                  Home
                </Link>
                <Link className={styles.link} onClick={this.handlePayment}>
                  Payment
                </Link>
                <Link className={styles.link} to="/profile">
                  Profile
                </Link>
              </Nav>
            ) : (
              <Nav className={`mr-auto ${styles.navLink}`}>
                <Link className={styles.navLeft} to="/dashboard">
                  Dashboard
                </Link>
                <Link className={styles.navLeft} to="/manage-movie">
                  Manage Movie
                </Link>
                <Link className={styles.navLeft} to="#c">
                  Manage Schedule
                </Link>
              </Nav>
            )}

            <Form>
              <Row className={styles.input}>
                <Row className={styles.inputMovieName}>
                  <Col
                    md={2}
                    className={
                      isShow === false
                        ? styles.imgSearchMovie
                        : styles.inputCancel
                    }
                    onClick={this.handleCancel}
                  >
                    {isShow === false ? (
                      <img
                        className={styles.imgSearch}
                        src={imgSearch}
                        alt=""
                      />
                    ) : (
                      <h5>X</h5>
                    )}
                  </Col>

                  <Col md={10} className={styles.inputSearch}>
                    <Form.Control
                      type="text"
                      name="search"
                      value={this.state.search}
                      placeholder="Search Movie Name..."
                      className={styles.inputName}
                      onChange={(event) => this.changeText(event)}
                    />
                  </Col>
                </Row>
                <Button
                  onClick={
                    localStorage.getItem("token")
                      ? this.handleSignOut
                      : this.handleSignIn
                  }
                  variant="light"
                  className={styles.button}
                >
                  {localStorage.getItem("token") ? "Sign Out" : "Sign Up"}
                </Button>
              </Row>

              <Col
                className={styles.getMovieSearch}
                style={
                  isShow ? { visibility: "visible" } : { visibility: "hidden" }
                }
              >
                {this.state.dataMovie.map((item, index) => {
                  return (
                    <div
                      className={styles.getSearch}
                      key={index}
                      onClick={() => this.handleParams(item)}
                    >
                      {item.movie_image ? (
                        <img
                          src={
                            "http://localhost:3001/backend1/api/" +
                            item.movie_image
                          }
                          alt=""
                        />
                      ) : (
                        <img src={imgDefault} alt="" />
                      )}
                      <div>
                        <label>{item.movie_name}</label>
                        <h5>{item.movie_category}</h5>
                      </div>
                    </div>
                  );
                })}
              </Col>
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.data,
});

export default connect(mapStateToProps)(NavBar);
