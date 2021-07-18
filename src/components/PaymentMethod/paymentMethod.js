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
import Swal from "sweetalert2";

class paymentMethod extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentMethod: "",
    };
  }

  handlePrev = () => {
    this.props.history.push("/order-page");
  };

  selectPaymentMethod = (selected) => {
    this.setState({ paymentMethod: selected });
  };

  handlePay = () => {
    if (this.state.paymentMethod === "") {
      Swal.fire({
        title: "Please select payment method !",
        confirmButtonText: "Ok",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Success Payment",
        confirmButtonText: "Ok",
      });
    }
  };

  render() {
    return (
      <>
        <Col className={styles.col}>
          <h2>Payment Method</h2>
          <Row className={styles.paymentMethod}>
            <div
              className={
                this.state.paymentMethod === "GooglePay"
                  ? styles.googlePaySelected
                  : styles.googlePay
              }
              onClick={() => this.selectPaymentMethod("GooglePay")}
            >
              <img src={googlePay} alt="" />
            </div>
            <div
              className={styles.visa}
              onClick={() => this.selectPaymentMethod("Visa")}
            >
              <img src={visa} alt="" />
            </div>
            <div
              className={styles.gopay}
              onClick={() => this.selectPaymentMethod("Gopay")}
            >
              <img src={gopay} alt="" />
            </div>
            <div
              className={styles.paypal}
              onClick={() => this.selectPaymentMethod("Paypal")}
            >
              <img src={paypal} alt="" />
            </div>
            <div
              className={styles.dana}
              onClick={() => this.selectPaymentMethod("Dana")}
            >
              <img src={dana} alt="" />
            </div>
            <div
              className={styles.bca}
              onClick={() => this.selectPaymentMethod("BCA")}
            >
              <img src={bca} alt="" />
            </div>
            <div
              className={styles.bri}
              onClick={() => this.selectPaymentMethod("BRI")}
            >
              <img src={bri} alt="" />
            </div>
            <div
              className={styles.ovo}
              onClick={() => this.selectPaymentMethod("Ovo")}
            >
              <img src={ovo} alt="" />
            </div>
          </Row>
          <div className={styles.button}>
            <Button
              className={styles.btn}
              variant="light"
              onClick={this.handlePrev}
            >
              Prvious step
            </Button>
            <Button
              className={styles.btn}
              variant="light"
              onClick={this.handlePay}
            >
              Pay your order
            </Button>
          </div>
        </Col>
      </>
    );
  }
}

export default paymentMethod;
