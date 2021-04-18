import React, { Component } from "react";
// import "./BasicReact.css";
import styles from "./BasicReact.module.css";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import NavBar from "../../../components/learning/NavBar";

class BasicReact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Rifqi Ziyad Imtinan",
      search: "",
      isShow: true,
      data: [
        {
          movie_id: 1,
          movie_name: "Spiderman",
        },
        {
          movie_id: 2,
          movie_name: "Batman",
        },
      ],
    };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    console.log("ComponentDidMount Running !");
    // digunakan untuk get data
  }

  componentDidUpdate() {
    console.log("ComponentDidUpdate Running !");
  }

  handleClick() {
    console.log("Declaration Function !");
    console.log("this is: ", this);
  }

  handleClick2 = () => {
    console.log("Arrow Function !");
    console.log("this is: ", this);
    this.setState({ name: "David" });
  };

  handleClick3 = (id, event) => {
    console.log("Send Argument !");
    console.log("id : ", id);
    console.log("event : ", event);
  };

  changeText = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
    // this.setState({ search: event.target.value });
  };

  handleParams = (id, event) => {
    console.log("Go To Movie Detail Page !");
    // console.log(this.props);
    this.props.history.push(`/learning/basic-movie-detail?movieId=${id}`);
  };

  


  render() {
    console.log(this.state);
    const { name, search } = this.state;
    return (
      <>
        <Container className={styles.containerCenter}>
          <h1>Basic React</h1>
          <NavBar />
          <h1>Hello {name} !</h1>
          <hr />
          <h3>Events</h3>
          <button onClick={this.handleClick}>Click Me !</button>
          <button onClick={this.handleClick2}>Click Me 2 !</button>
          <button onClick={(event) => this.handleClick3(1, event)}>
            Click Me 3 !
          </button>
          <h6>Search key : {search}</h6>
          <input
            placeholder="Search ..."
            name="search"
            onChange={(event) => this.changeText(event)}
          />
          <hr />
          <h3>Link & URL Params</h3>
          <a href="/learning/basic-movie-detail">
            Go to movie detail with Anchor
          </a>
          <br />
          <Link to="/learning/basic-movie-detail">
            Go to movie detail with Link
          </Link>
          <br />
          <Button
            variant="primary"
            onClick={(event) => this.handleParams(1, event)}
          >
            Detail
          </Button>
          <hr />
          <h3>Styling in React</h3>
          <h2 className={styles.header}>Style With BasicReact.module.css</h2>
          <hr />
          <h3>Conditional</h3>
          {this.state.isShow ? <h5>Show is True</h5> : <h5>Shiw is False</h5>}
          <hr />
          <h3>Looping/Mapping</h3>
          {this.state.data.map((item, index) => {
            return <li key={index}>{item.movie_name}</li>;
          })}
        </Container>
      </>
    );
  }
}

export default BasicReact;