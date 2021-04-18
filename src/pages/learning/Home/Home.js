import React, {Component} from "react"
import axios from "axios"
import styles from "./Home.module.css"
import NavBar from "../../../components/learning/NavBar"
import Cards from "../../../components/learning/Cards"
import { Container, Form, Button, Col, Row } from "react-bootstrap"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      form: {
        movieName: "",
        movieCategory: "",
        movieReleaseDate: ""
      },
      data: [],
      pagination:{},
      page: 1,
      limit: 3
    };
  }

  componentDidMount() {
    this.getData()
  }

  getData = () => {
    console.log("Get Data !");
    axios.get("http://localhost:3001/api/v1/movie?page=1&limit=10&search=&sort=movie_name ASC").then((res) => {
      // console.log(res);
      this.setState({data: res.data.data, pagination: res.data.pagination})
    })
    .catch((err) => {
      console.log(err);
    });
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value
      },
    });
  };

  submitData = (event) => {
    event.preventDefault();
    console.log('Save Data !')
    console.log(this.state.form)
  }
  
  render () {
    console.log(this.state)
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1>Home Page !</h1>
          <NavBar />
          <div className={styles.containerForm}>
            <Form onSubmit={this.submitData} >
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Name</Form.Label>
              <Form.Control type="text" placeholder="Input Movie Name" name="movieName" onChange={(event) => this.changeText(event)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Category</Form.Label>
              <Form.Control type="text" placeholder="Action, Comedy" name="movieCategory" onChange={(event) => this.changeText(event)} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Movie Release Date</Form.Label>
              <Form.Control type="date" name="movieReleaseDate" onChange={(event) =>this.changeText(event)} />
            </Form.Group>
            <Button variant='primary' type='reset'>Reset</Button>
            <Button variant='primary' type='submit'>Submit</Button>
            </Form>
          </div>
          <hr />
          <Row>
            {this.state.data.map((item, index) => {
              return (
            <Col md={4} key={index}>
              <Cards data={item} />
            </Col>
              )
            })}
          </Row>
        </Container>
      </>
    )
  }
}

export default Home