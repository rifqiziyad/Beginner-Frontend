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
import axiosApiIntances from "../../utils/axios";

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
      const setData = {
        userId: localStorage.user_id,
        orderMovieName: localStorage.movie_name,
        orderDate: localStorage.date,
        orderTime: localStorage.hour,
        orderCount: localStorage.seat.split(",").length,
        orderSeats: localStorage.seat,
        orderPrice: localStorage.premiere_price,
        orderPremiereImage: localStorage.premiere_image,
      };
      axiosApiIntances
        .post("orders", setData)
        .then(() => {
          Swal.showLoading();
        })
        .catch((err) => {
          alert(err.response);
        })
        .finally(() => {
          Swal.fire({
            icon: "success",
            title: "Paid Successfully",
            confirmButtonText: "Ok",
            allowOutsideClick: false,
          }).then((result) => {
            if (result.isConfirmed) {
              this.props.history.push("/profile");
              localStorage.removeItem("date");
              localStorage.removeItem("premiere_name");
              localStorage.removeItem("premiere_price");
              localStorage.removeItem("premiere_image");
              localStorage.removeItem("movie_name");
              localStorage.removeItem("seat");
              localStorage.removeItem("hour");
            }
          });
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
              className={
                this.state.paymentMethod === "Visa"
                  ? styles.visaSelected
                  : styles.visa
              }
              onClick={() => this.selectPaymentMethod("Visa")}
            >
              <img src={visa} alt="" />
            </div>
            <div
              className={
                this.state.paymentMethod === "Gopay"
                  ? styles.gopaySelected
                  : styles.gopay
              }
              onClick={() => this.selectPaymentMethod("Gopay")}
            >
              <img src={gopay} alt="" />
            </div>
            <div
              className={
                this.state.paymentMethod === "Paypal"
                  ? styles.paypalSelected
                  : styles.paypal
              }
              onClick={() => this.selectPaymentMethod("Paypal")}
            >
              <img src={paypal} alt="" />
            </div>
            <div
              className={
                this.state.paymentMethod === "Dana"
                  ? styles.danaSelected
                  : styles.dana
              }
              onClick={() => this.selectPaymentMethod("Dana")}
            >
              <img src={dana} alt="" />
            </div>
            <div
              className={
                this.state.paymentMethod === "BCA"
                  ? styles.bcaSelected
                  : styles.bca
              }
              onClick={() => this.selectPaymentMethod("BCA")}
            >
              <img src={bca} alt="" />
            </div>
            <div
              className={
                this.state.paymentMethod === "BRI"
                  ? styles.briSelected
                  : styles.bri
              }
              onClick={() => this.selectPaymentMethod("BRI")}
            >
              <img src={bri} alt="" />
            </div>
            <div
              className={
                this.state.paymentMethod === "Ovo"
                  ? styles.ovoSelected
                  : styles.ovo
              }
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
