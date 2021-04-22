import React, { Component } from "react";
import { Row, Button, Col } from "react-bootstrap";
import styles from "./paymentMethod.module.css";
import googlePay from "../../assets/img/logo google pay.png";
import visa from "../../assets/img/logo visa.png";
import gopay from "../../assets/img/logo gopay.png";
import paypal from "../../assets/img/logo paypal.png";
import dana from "../../assets/img/logo dana.png";
import bca from "../../assets/img/logo bca.png";
import bri from "../../assets/img/logo bri.png";
import ovo from "../../assets/img/logo ovo.png";

class paymentMethod extends Component {
  render() {
    return (
      <>
        <Col className={styles.col}>
          <h2>PaymentMethod</h2>
          <Row className={styles.paymentMethod}>
            <div className={styles.googlePay}>
              <img src={googlePay} alt="" />
            </div>
            <div className={styles.visa}>
              <img src={visa} alt="" />
            </div>
            <div className={styles.gopay}>
              <img src={gopay} alt="" />
            </div>
            <div className={styles.paypal}>
              <img src={paypal} alt="" />
            </div>
            <div className={styles.dana}>
              <img src={dana} alt="" />
            </div>
            <div className={styles.bca}>
              <img src={bca} alt="" />
            </div>
            <div className={styles.bri}>
              <img src={bri} alt="" />
            </div>
            <div className={styles.ovo}>
              <img src={ovo} alt="" />
            </div>
            <div className={styles.or}>
              <h3 className={styles.textOr}>Or</h3>
              <h3 className={styles.text}>
                Pay via cash.{" "}
                <span className={styles.textPurple}>See how it work</span>{" "}
              </h3>
            </div>
          </Row>
          <div className={styles.button}>
            <Button className={styles.btn} variant="light">
              Prvious step
            </Button>
            <Button className={styles.btn} variant="light">
              Pay your order
            </Button>
          </div>
        </Col>
      </>
    );
  }
}

export default paymentMethod;
