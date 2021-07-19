import React, { Component } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Payment.module.css";
import PaymentMethod from "../../../components/PaymentMethod/paymentMethod";
import logoWarning from "../../../assets/img/clarity_warning-standard-solid.png";
import Footer from "../../../components/Footer/Footer";
import { connect } from "react-redux";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataUser: this.props.auth.data,
    };
  }

  render() {
    const { user_name, user_email, user_phone_number } = this.state.dataUser;

    return (
      <>
        <NavBar {...this.props} />
        <Container fluid className={styles.container}>
          <Row className={styles.row}>
            <Col className={styles.col1} md={7}>
              <h2>Payment Info</h2>
              <div className={styles.paymentInfo}>
                <div className={styles.date}>
                  <h5>Date & time</h5>
                  <p>
                    {localStorage.getItem("date")} at{" "}
                    {localStorage.getItem("hour")}
                  </p>
                </div>
                <div className={styles.title}>
                  <h5>Movie title</h5>
                  <p>{localStorage.getItem("movie_name")}</p>
                </div>
                <div className={styles.cinema}>
                  <h5>Cinema name</h5>
                  <p>{localStorage.getItem("premiere_name")}</p>
                </div>
                <div className={styles.numberTicket}>
                  <h5>Number of ticket</h5>
                  <p>{localStorage.getItem("seat").split(",").length} pieces</p>
                </div>
                <div className={styles.total}>
                  <h5>Total payment</h5>
                  <p>
                    $
                    {parseInt(localStorage.getItem("premiere_price")) *
                      parseInt(localStorage.getItem("seat").split(",").length)}
                  </p>
                </div>
              </div>
              <PaymentMethod {...this.props} />
            </Col>

            <Col className={styles.col2} md={3}>
              <h2>Personal Info</h2>
              <div className={styles.personalInfo}>
                <div className={styles.fullName}>
                  <p>Full Name</p>
                  <div className={styles.name}>{user_name}</div>
                </div>
                <div className={styles.email}>
                  <p>E-mail</p>
                  <div className={styles.mail}>{user_email}</div>
                </div>
                <div className={styles.phone}>
                  <p>Phone Number</p>
                  <div className={styles.phoneNumber}>
                    <h1 className={styles.number}>+62</h1>
                    {user_phone_number ? (
                      <h1>{user_phone_number}</h1>
                    ) : (
                      <h1>-</h1>
                    )}
                  </div>
                </div>
                <div className={styles.warning}>
                  <img src={logoWarning} alt="" />
                  <h5>Fill your data correctly.</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Payment);
