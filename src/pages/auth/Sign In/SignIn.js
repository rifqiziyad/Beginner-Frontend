import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import backgroundMarvel from "../../../assets/img/marvel.png";
import styles from "./SignIn.module.css";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/auth";
import Swal from "sweetalert2";

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userEmail: "",
        userPassword: "",
      },
    };
  }

  changeText = (event) => {
    this.setState({
      form: {
        ...this.state.form,
        [event.target.name]: event.target.value,
      },
    });
  };

  handleSignIn = (event) => {
    event.preventDefault();
    let resData;
    this.props
      .login(this.state.form)
      .then((res) => {
        Swal.showLoading();
        resData = res.value.data;
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: err.response.data.msg,
          allowOutsideClick: false,
        });
      })
      .finally(() => {
        localStorage.setItem("token", resData.data.token);
        localStorage.setItem("user_id", resData.data.user_id);
        Swal.fire({
          icon: "success",
          title: resData.msg,
          confirmButtonText: "Ok",
          allowOutsideClick: false,
        }).then((result) => {
          if (result.isConfirmed) {
            this.props.history.push("/");
          }
        });
      });
  };

  render() {
    const { userEmail, userPassword } = this.state;
    return (
      <>
        <Container fluid className={styles.container}>
          <Row className={styles.rowMain}>
            <Col md={7} className={styles.col1}>
              <img
                src={backgroundMarvel}
                alt="backgorund"
                className={styles.bgMarvel}
              />
            </Col>
            <Col md={5} className={styles.col2}>
              <Form onSubmit={this.handleSignIn}>
                <p className={styles.sign}>Sign In</p>
                <p className={styles.text}>
                  Sign in with your data that you entered during your
                  registration
                </p>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label className={styles.label}>Email</Form.Label>
                  <Form.Control
                    className={styles.input}
                    type="email"
                    placeholder="Write your email"
                    name="userEmail"
                    value={userEmail}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label className={styles.label}>Password</Form.Label>
                  <Form.Control
                    className={styles.input}
                    type="password"
                    placeholder="Write your password"
                    name="userPassword"
                    value={userPassword}
                    onChange={(event) => this.changeText(event)}
                  />
                </Form.Group>
                <Button className={styles.submit} type="submit">
                  Sign In
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
