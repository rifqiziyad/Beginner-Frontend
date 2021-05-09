import React, { Component } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import backgroundMarvel from "../../../assets/img/marvel.png";
import styles from "./SignIn.module.css";
import logoGoogle from "../../../assets/img/google-logo.png";
import logoFacebook from "../../../assets/img/facebook- logo.png";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/auth";

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
    this.props.login(this.state.form).then(() => {
      localStorage.setItem("token", this.props.auth.data.token);
      if (this.props.auth.data.user_status !== 100) {
        alert(`Verification your account first \nCheck your email `);
      } else {
        this.props.history.push("/");
      }
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
                <p className={styles.forgot}>
                  Forgot your password? <span>Reset now</span>
                </p>
                <p className={styles.or}>Or</p>
                <div className={styles.account}>
                  <div className={styles.google}>
                    <img src={logoGoogle} alt="" />
                    <p>Google</p>
                  </div>
                  <div className={styles.facebook}>
                    <img src={logoFacebook} alt="" />
                    <p>Facebook</p>
                  </div>
                </div>
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
