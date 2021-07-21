import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Footer from "../../../components/Footer/Footer";
import NavBar from "../../../components/NavBar/NavBar";
import styles from "./dashboard.module.css";
import { Line } from "react-chartjs-2";
import axiosApiIntances from "../../../utils/axios";
import moment from "moment";

class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieName: "",
      premiereName: "",
      locationName: "",
      dataIncome: [],
      totalData: [],

      months: {
        labels: [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Agu",
          "Sep",
          "Okt",
          "Nov",
          "Des",
        ],
        datasets: [
          {
            label: "Dataset of Months",
            lineTension: 0.1,
            backgroundColor: "white",
            borderColor: "#5f2eea",
            borderDash: [],
            borderDashOffset: 1,
            pointBorderColor: "#5f2eea",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 7,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#5f2eea",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [],
          },
        ],
      },
    };
  }

  componentDidMount() {
    this.getDataChart();
  }

  getDataChart = () => {
    axiosApiIntances
      .get(
        `orders?movieName=${this.state.movieName}&premiereName=${this.state.premiereName}&locationName=${this.state.locationName}`
      )
      .then((res) => {
        let data = res.data.data.map((item) => {
          return {
            month: moment(item.date).format("ll").split(" ")[0],
            data: item.data,
          };
        });
        const dataIncome = data;
        let dataChart = [];
        for (const i of this.state.months.labels) {
          let res = 0;
          for (const j of dataIncome) {
            if (i === j.month) {
              res += 1;
              dataChart.push(j.data);
            }
          }
          if (res === 0) {
            dataChart.push(0);
          }
        }
        let result = { ...this.state.months.datasets[0], data: dataChart };
        this.setState({
          months: {
            labels: this.state.months.labels,
            datasets: [result],
          },
        });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

  componentDidUpdate(_, prevState) {
    if (
      this.state.movieName !== prevState.movieName ||
      this.state.premiereName !== prevState.premiereName ||
      this.state.locationName !== prevState.locationName
    ) {
      this.getDataChart();
    }
  }

  handleFilter = (select) => {
    if (select === "selectMovie") {
      const option = document.getElementById("selectMovie").value;
      this.setState({ movieName: option });
    }
    if (select === "selectPremiere") {
      const option = document.getElementById("selectPremiere").value;
      this.setState({ premiereName: option });
    }
    if (select === "selectLocation") {
      const option = document.getElementById("selectLocation").value;
      this.setState({ locationName: option });
    }
  };

  handleReset = () => {
    this.setState({ movieName: "", premiereName: "", locationName: "" });
  };

  render() {
    console.log(this.state.months.datasets[0].data);
    return (
      <>
        <NavBar />
        <Container fluid className={styles.container}>
          <Row className={styles.rowContent}>
            <div className={styles.sideLeft}>
              <h1>Dashboard</h1>
              <div>
                <Line data={this.state.months} />
              </div>
            </div>
            <div className={styles.sideRight}>
              <h1>Filtered</h1>
              <div>
                <form className={styles.selectFilter}>
                  <select
                    id="selectMovie"
                    onChange={() => this.handleFilter("selectMovie")}
                    className={styles.selectCss}
                  >
                    <option value="">All Movie</option>
                    <option value="SpiderMan">Spider-Man: No Way Home</option>
                    <option value="Jumanji">
                      Jumanji: Welcome to the Jungle
                    </option>
                    <option value="Superman">Superman</option>
                    <option value="Batman">Batman</option>
                    <option value="Spongebob">Spongebob</option>
                  </select>
                  <select
                    id="selectPremiere"
                    onChange={() => this.handleFilter("selectPremiere")}
                    className={styles.selectCss}
                  >
                    <option value="">All Premiere</option>
                    <option value="Ebu.id">Ebu.id</option>
                    <option value="Hiflix">Hiflix</option>
                    <option value="CinemaOne21">Cinema One 21</option>
                  </select>
                  <select
                    id="selectLocation"
                    onChange={() => this.handleFilter("selectLocation")}
                    className={styles.selectCss}
                  >
                    <option value="">All Location</option>
                    <option value="Ciputat">Ciputat</option>
                    <option value="Blok M">Blok M</option>
                    <option value="Pamulang">Pamulang</option>
                    <option value="Cinangka">Cinangka</option>
                    <option value="Bintaro">Bintaro</option>
                  </select>

                  <button
                    type="reset"
                    className={styles.btnReset}
                    onClick={this.handleReset}
                  >
                    Reset
                  </button>
                </form>
              </div>
            </div>
          </Row>
        </Container>
        <Footer />
      </>
    );
  }
}

export default dashboard;
