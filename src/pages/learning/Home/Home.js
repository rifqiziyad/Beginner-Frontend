import React, { Component } from "react";
import axiosApiIntances from "../../../utils/axios";
import styles from "./Home.module.css";
import NavBar from "../../../components/learning/NavBar";
import Cards from "../../../components/learning/Cards";
import ReactPaginate from "react-paginate";
import { Container, Form, Button, Col, Row, Spinner } from "react-bootstrap";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
      },
      data: [],
      pagination: {},
      page: 1,
      limit: 3,
      isLoading: false,
      isUpdate: false,
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
      .get(`movie?page=${page}&limit=${limit}&search=&sort=movie_name ASC`)
      .then((res) => {
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

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  resetData = (event) => {
    event.preventDefault();
    this.setState({
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: "",
      },
    });
  };

  submitData = (event) => {
    event.preventDefault();
    console.log("Save Data !");
    console.log(this.state.form);
    // const {form} = this.state.form
    // proses reqeust post movie
    // axiosApiIntances.post(`movie`, form).then(
    //   this.getData()
    //   this.resetData()
    // ).catch()
  };

  setUpdate = (data) => {
    console.log("Set Data");
    console.log(data);
    this.setState({
      isUpdate: true,
      id: data.movie_id,
      form: {
        movieName: data.movie_name,
        movieCategory: data.movie_category,
        movieReleaseDate: data.movie_release_date.slice(0, 10),
      },
    });
  };

  updateData = (event) => {
    event.preventDefault();
    console.log("Update Data");
    console.log(this.state.id);
    console.log(this.state.form);
    this.setState({ isUpdate: false });
    this.resetData(event);
    // const {form} = this.state.form
    // proses reqeust patch movie
    // axiosApiIntances.patch(`movie/${id}`).then(
    //   this.getData()
    //   this.resetData()
    // ).catch()
  };

  deleteData = (id) => {
    console.log("Delete Data");
    console.log(id);
    // const {form} = this.state.form
    // proses reqeust delete movie
    // axiosApiIntances.delete(`movie/${id}`).then(
    //   this.getData()
    //   this.resetData()
    // ).catch()
  };

  handlePageClick = (event) => {
    const selectedPage = event.selected + 1;
    this.setState({ page: selectedPage }, () => {
      this.getData();
    });
  };

  render() {
    // console.log(this.state);
    const { totalPage } = this.state.pagination;
    const { isLoading, isUpdate } = this.state;
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1>Home Page !</h1>
          <NavBar />
          <div className={styles.containerForm}>
            <Form
              onSubmit={isUpdate ? this.updateData : this.submitData}
              onReset={this.resetData}
            >
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Movie Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Input Movie Name"
                  name="movieName"
                  value={this.state.form.movieName}
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Movie Category</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Action, Comedy"
                  value={this.state.form.movieCategory}
                  name="movieCategory"
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Movie Release Date</Form.Label>
                <Form.Control
                  type="date"
                  name="movieReleaseDate"
                  value={this.state.form.movieReleaseDate}
                  onChange={(event) => this.changeText(event)}
                />
              </Form.Group>
              <Button variant="primary" type="reset">
                Reset
              </Button>
              <Button variant="primary" type="submit">
                {isUpdate ? "Update" : "Submit"}
              </Button>
            </Form>
          </div>
          <hr />

          <Row>
            {isLoading ? (
              <Col md={12}>
                <Spinner animation="border" variant="warning" />
              </Col>
            ) : (
              this.state.data.map((item, index) => {
                return (
                  <Col md={4} key={index}>
                    <Cards
                      data={item}
                      handleUpdate={this.setUpdate.bind(this)}
                      handleDelete={this.deleteData.bind(this)}
                    />
                  </Col>
                );
              })
            )}
          </Row>
          <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={totalPage} // Total page
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={this.handlePageClick}
            containerClassName={styles.pagination}
            subContainerClassName={`${styles.pages} ${styles.pagination}`}
            activeClassName={styles.active}
          />
        </Container>
      </>
    );
  }
}

export default Home;
