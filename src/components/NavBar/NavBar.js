import React, { Component } from "react";
import { Row, Navbar, Col, Nav, Form, Button } from "react-bootstrap";
import styles from "./Navbar.module.css";
import imgSearch from "../../assets/img/Search.png";
import { Link } from "react-router-dom";
import axiosApiIntances from "../../utils/axios";

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

  // componentDidMount() {
  //   this.handleSignIn();
  // }

  handleSignIn = () => {
    this.props.history.push("/login");
    console.log("Sign In");
  };

  handleSignOut = () => {
    localStorage.removeItem("token");
    this.props.history.push("/");
  };

  handleParams = (id) => {
    // this.props.history.push(`/movie-detail${id}`);
    console.log(id);
  };

  changeText = (event) => {
    this.setState({ search: event.target.value, isShow: true });
    console.log(this.state.search);
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

  render() {
    const { isShow } = this.state;
    console.log(this.state.id);

    return (
      <>
        <Navbar className={styles.navbar} expand="lg">
          <Link className={styles.linkBrand} to="/">
            SanS
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link className={styles.link} to="/">
                Home
              </Link>
              <Link className={styles.link} to="/payment">
                Payment
              </Link>
              <Link className={styles.link} to="/profile">
                Profile
              </Link>
            </Nav>
            <Form>
              <Row>
                <Row className={styles.inputMovieName}>
                  <Col md={2} className={styles.imgSearchMovie}>
                    <img className={styles.imgSearch} src={imgSearch} alt="" />
                  </Col>

                  <Col md={10} className={styles.inputSearch}>
                    <Form.Control
                      type="text"
                      name="search"
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
                  {localStorage.getItem("token") ? "Sign Out" : "Sign In"}
                </Button>
              </Row>
              {isShow ? (
                <Col
                  className={styles.getMovieSearch}
                  onClick={() => this.handleParams(this.state.dataMovie)}
                >
                  {this.state.dataMovie.map((item, index) => {
                    return (
                      <div className={styles.getSearch} key={index}>
                        <img
                          src={`http://localhost:3001/api/${item.movie_image}`}
                          alt=""
                        />
                        <label>{item.movie_name}</label>
                      </div>
                    );
                  })}
                </Col>
              ) : (
                console.log("false")
              )}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}

export default NavBar;
