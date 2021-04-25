import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  Spinner,
} from "react-bootstrap";
import NavbarAdmin from "../../../components/NavBar Admin/NavbarAdmin";
import styles from "./Admin.module.css";
import Footer from "../../../components/Footer/Footer";
import CardAdmin from "../../../components/CardsAdmin/CardAdmin";
import axiosApiIntances from "../../../utils/axios";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
        movieCasts: "",
        durationHour: "",
        durationMinute: "",
        movieSynopsis: "",
        movieDirector: "",
      },
      data: [],
      pagination: {},
      isUpdate: false,
      isLoading: false,
      page: 1,
      limit: 100,
      id: "",
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    console.log("Get Data !");
    const { page, limit } = this.state;
    this.setState({ isLoading: true });
    axiosApiIntances
      .get(`movie?page=${page}&limit=${limit}&search=&sort=movie_id ASC`)
      .then((res) => {
        console.log(res);
        this.setState({ data: res.data.data, pagination: res.data.pagination });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 500);
      });
  };

  setUpdate = (data) => {
    console.log("Set Update");
    console.log(data);
    this.setState({
      isUpdate: true,
      id: data.movie_id,
      form: {
        movieName: data.movie_name,
        movieCategory: data.movie_category,
        movieReleaseDate: data.movie_release_date.slice(0, 10),
        movieCasts: data.casts,
        durationHour: data.duration_hour,
        durationMinute: data.duration_minute,
        movieSynopsis: data.synopsis,
        movieDirector: data.directed,
        movie_updated_at: new Date(Date.now()),
      },
    });
  };

  updateData = (event) => {
    event.preventDefault();
    console.log("Update Data Berhasil");
    const { form } = this.state;
    // proses reqeust patch movie
    axiosApiIntances
      .patch(`movie/${this.state.id}`, form)
      .then(this.getData(), this.resetData())
      .catch();
  };

  deleteData = (id) => {
    console.log("Delete Data");
    axiosApiIntances
      .delete(`movie/${id}`)
      .then(
        console.log(`Data dengan id ${id} berhasil dihapus`),
        this.getData()
      )
      .catch((err) => {
        console.log(err);
      });
  };

  submitData = (event) => {
    event.preventDefault();
    console.log("Save Data !");
    const { form } = this.state;
    console.log(form);

    // proses reqeust post movie
    axiosApiIntances
      .post("movie", form)
      .then((res) => {
        this.getData();
        this.resetData();
      })
      .catch((err) => console.log(err));
  };

  resetData = () => {
    this.setState({
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
        movieCasts: "",
        durationHour: "",
        durationMinute: "",
        movieSynopsis: "",
        movieDirector: "",
      },
    });
  };

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  render() {
    const { isUpdate, isLoading } = this.state;
    const {
      movieName,
      movieCategory,
      movieReleaseDate,
      movieCasts,
      durationHour,
      durationMinute,
      movieSynopsis,
      movieDirector,
    } = this.state.form;
    return (
      <>
        <NavbarAdmin />

        <Container fluid className={styles.container}>
          <Form
            onSubmit={isUpdate ? this.updateData : this.submitData}
            onReset={this.resetData}
          >
            <Row className={styles.rowMain}>
              <h2>Form Movie</h2>
              <Row className={styles.row}>
                <Col className={styles.partImg} md={2}>
                  <div className={styles.cardMovie}>
                    <img
                      src="https://www.a1hosting.net/wp-content/themes/arkahost/assets/images/default.jpg"
                      alt=""
                    />
                  </div>
                </Col>
                <Col className={styles.info1} md={5}>
                  <div className={styles.movieInfo}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className={styles.label}>
                        Movie Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Input Movie Name"
                        name="movieName"
                        value={movieName}
                        className={styles.inputName}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className={styles.label}>Director</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Input Movie Director"
                        name="movieDirector"
                        value={movieDirector}
                        className={styles.inputName}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className={styles.label}>
                        Movie Release Date
                      </Form.Label>
                      <Form.Control
                        type="date"
                        name="movieReleaseDate"
                        value={movieReleaseDate}
                        className={styles.inputName}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                  </div>
                </Col>
                <Col className={styles.info2} md={5}>
                  <div className={styles.movieInfo}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className={styles.label}>Category</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Input Movie Category"
                        name="movieCategory"
                        value={movieCategory}
                        className={styles.inputName}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Form.Label className={styles.label}>Cats</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Input Casts"
                        name="movieCasts"
                        value={movieCasts}
                        className={styles.inputName}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                      <Row>
                        <Col>
                          <Form.Label className={styles.label}>
                            Duration Hour
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="durationHour"
                            placeholder="Input Hour"
                            value={durationHour}
                            className={styles.inputName}
                            onChange={(event) => this.changeText(event)}
                          />
                        </Col>
                        <Col>
                          <Form.Label className={styles.label}>
                            Duration Minute
                          </Form.Label>
                          <Form.Control
                            type="number"
                            name="durationMinute"
                            placeholder="Input Minute"
                            value={durationMinute}
                            className={styles.inputName}
                            onChange={(event) => this.changeText(event)}
                          />
                        </Col>
                      </Row>
                    </Form.Group>
                  </div>
                </Col>
                <Col>
                  <Form.Label className={styles.label}>Synopsis</Form.Label>
                  <Form.Control
                    as="textarea"
                    value={movieSynopsis}
                    name="movieSynopsis"
                    onChange={(event) => this.changeText(event)}
                    placeholder="Input Synopsis"
                  />
                </Col>
              </Row>
              <Col className={styles.btn}>
                <Button
                  className={styles.buttonReset}
                  variant="light"
                  type="reset"
                >
                  Reset
                </Button>
                <Button
                  className={styles.buttonSubmit}
                  variant="light"
                  type="submit"
                >
                  {isUpdate ? "Update" : "Submit"}
                </Button>
              </Col>
            </Row>
          </Form>
          <Row className={styles.row2}>
            <Col className={styles.h2} md={8}>
              Date Movie
            </Col>
            <Col>
              <Row>
                <Col md={3}>
                  <Dropdown>
                    <Dropdown.Toggle
                      className={styles.sort}
                      variant="light"
                      id="dropdown-basic"
                    >
                      Sort
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                      <Dropdown.Item href="#/action-2">
                        Another action
                      </Dropdown.Item>
                      <Dropdown.Item href="#/action-3">
                        Something else
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
                <Col className={styles.inputMovieName}>
                  <Form.Control
                    type="text"
                    name="Search"
                    placeholder="Search Movie Name..."
                    className={styles.inputName}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          <Col className={styles.cards}>
            {isLoading ? (
              <Col md={12}>
                <Spinner animation="border" variant="warning" />
              </Col>
            ) : (
              this.state.data.map((item, index) => {
                return (
                  <Col md={3} key={index}>
                    <CardAdmin
                      data={item}
                      handleUpdate={this.setUpdate.bind(this)}
                      handleDelete={this.deleteData.bind(this)}
                    />
                  </Col>
                );
              })
            )}
          </Col>
        </Container>
        <Footer />
      </>
    );
  }
}

export default Admin;
