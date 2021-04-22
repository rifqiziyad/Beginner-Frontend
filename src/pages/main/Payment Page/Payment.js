import React, { Component } from "react";
import NavBar from "../../../components/NavBar/NavBar";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Payment.module.css";
import PaymentMethod from "../../../components/PaymentMethod/paymentMethod";
import logoWarning from "../../../assets/img/clarity_warning-standard-solid.png";
import Footer from "../../../components/Footer/Footer";

class Payment extends Component {
  render() {
    return (
      <>
        <NavBar />

        <Container fluid className={styles.container}>
          <Row className={styles.row}>
            <Col className={styles.col1} md={7}>
              <h2>Payment Info</h2>
              <div className={styles.paymentInfo}>
                <div className={styles.date}>
                  <h5>Date & time</h5>
                  <p>Tuesday, 06 April 2021 at 07:00am</p>
                </div>
                <div className={styles.title}>
                  <h5>Movie title</h5>
                  <p>Spider-Man: Homecoming</p>
                </div>
                <div className={styles.cinema}>
                  <h5>Cinema name</h5>
                  <p>CineOne21 Cinema</p>
                </div>
                <div className={styles.numberTicket}>
                  <h5>Number of ticket</h5>
                  <p>3 pieces</p>
                </div>
                <div className={styles.total}>
                  <h5>Total payment</h5>
                  <p>$30,00</p>
                </div>
              </div>
              <PaymentMethod />
            </Col>

            <Col className={styles.col2} md={3}>
              <h2>Personal Info</h2>
              <div className={styles.personalInfo}>
                <div className={styles.fullName}>
                  <p>Full Name</p>
                  <div className={styles.name}>Rifqi Ziyad Imtinan</div>
                </div>
                <div className={styles.email}>
                  <p>E-mail</p>
                  <div className={styles.mail}>rifqiimtinan@gmail.com</div>
                </div>
                <div className={styles.phone}>
                  <p>Phone Number</p>
                  <div className={styles.phoneNumber}>
                    <h1 className={styles.number}>+62</h1>
                    <h1>89630213048</h1>
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

export default Payment;
