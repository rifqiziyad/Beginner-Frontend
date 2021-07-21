import React, { Component } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./Profile.module.css";
import imgProfile from "../../../assets/img/profil.jpg";
import buttonMenu from "../../../assets/img/Group.png";
import Footer from "../../../components/Footer/Footer";
import { connect } from "react-redux";
import axiosApiIntances from "../../../utils/axios";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        userFirstName: "",
        userLastName: "",
        userEmail: "",
        userPhoneNumber: "",
        dataImage: null,
      },
    };
  }

  componentDidMount() {
    this.setUpdate();
  }

  setUpdate = () => {
    this.setState({
      form: {
        userFirstName: this.props.user.data.user_name,
        userLastName: this.props.user.data.user_last_name,
        userEmail: this.props.user.data.user_email,
        userPhoneNumber: this.props.user.data.user_phone_number,
      },
    });
  };

  updateData = (event) => {
    event.preventDefault();
    const {
      userFirstName,
      userLastName,
      userEmail,
      userPhoneNumber,
      dataImage,
    } = this.state.form;
    const formData = new FormData();
    formData.append("userFirstName", userFirstName);
    formData.append("userLastName", userLastName);
    formData.append("userEmail", userEmail);
    formData.append("userPhoneNumber", userPhoneNumber);
    formData.append("dataImage", dataImage);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1]);
    // }
    window.confirm("Yakin Update ?")
      ? axiosApiIntances
          .patch(`profile/${this.props.user.data.user_id}`)
          .then(this.setUpdate())
          .catch((error) => {
            console.log(error);
          })
      : console.log("batal");
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
    const { userFirstName, userLastName, userEmail, userPhoneNumber } =
      this.state.form;
    return (
      <>
        <NavBar />
        <Container fluid className={styles.containerp}>
          <Row className={styles.row}>
            <Col xs={3} className={styles.colProfile}>
              <Col className={styles.col1}>
                <Row className={styles.info}>
                  <p>INFO</p>
                  <img src={buttonMenu} alt="" />
                </Row>
                <div className={styles.image}>
                  <img src={imgProfile} alt="" />
                  <p>{this.props.user.data.user_name}</p>
                </div>
              </Col>
            </Col>

            <Col className={styles.col2} xs={8}>
              <Row className={styles.navTop}>
                <h1>Account Settings</h1>
                <p>Order History</p>
              </Row>

              <Form onSubmit={this.updateData}>
                <Col className={styles.detailInfo}>
                  <Col className={styles.detailsInfo}>Details Information</Col>
                  <hr />
                  <Row className={styles.inputInfo}>
                    <Form.Group className={styles.formGroup}>
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        placeholder="Your First Name"
                        name="userFirstName"
                        value={userFirstName}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>

                    <Form.Group className={styles.formGroup}>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        placeholder="Your Last Name"
                        name="userLastName"
                        value={userLastName}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                    <Form.Group className={styles.formGroup}>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        placeholder="Your Email"
                        name="userEmail"
                        value={userEmail}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                    <Form.Group className={styles.formGroup}>
                      <Form.Label>Phone Number</Form.Label>
                      <Form.Control
                        placeholder="Your Phone Number"
                        name="userPhoneNumber"
                        value={userPhoneNumber}
                        onChange={(event) => this.changeText(event)}
                      />
                    </Form.Group>
                  </Row>
                </Col>
                <Button className={styles.btn} variant="light" type="submit">
                  Update Changes
                </Button>
              </Form>

              {/* <Form>
                <Col className={styles.account}>
                  <Col className="col-md-12 account">Account and Privacy</Col>
                  <hr />
                  <Row className={styles.inputPassword}>
                    <Form.Group className={styles.formGroup}>
                      <Form.Label>New Paswword</Form.Label>
                      <Form.Control type="password" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className={styles.formGroup}>
                      <Form.Label>Confirm Password</Form.Label>
                      <Form.Control type="password" placeholder="Enter email" />
                    </Form.Group>
                  </Row>
                </Col>
                <Button className={styles.btn} variant="light">
                  Update Changes
                </Button>
              </Form> */}
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.auth,
});

export default connect(mapStateToProps)(Profile);
