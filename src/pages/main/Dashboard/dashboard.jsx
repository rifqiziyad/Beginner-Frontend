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
      monthsList: [
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
        res.data.data.map((item) => {
          return this.setState({
            dataIncome: [
              ...this.state.dataIncome,
              {
                month: moment(item.date).format("ll").split(" ")[0],
                data: item.data,
              },
            ],
          });
        });
      })
      .catch((err) => {
        alert(err.response);
      });
  };

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

  handleSubmit = (event) => {
    event.preventDefault();
    this.getDataChart();
  };

  render() {
    console.log(this.state);

    const dataFortChart = () => {
      let data = [];
      for (const i of this.state.monthsList) {
        let res = 0;
        for (const j of this.state.dataIncome) {
          if (i === j.month) {
            res += 1;
            data.push(j.data);
          }
        }
        if (res === 0) {
          data.push(0);
        }
      }
      return data;
    };

    const data = dataFortChart();
    const months = {
      labels: this.state.monthsList,
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
          data: data,
        },
      ],
    };
    return (
      <>
        <NavBar />
        <Container fluid className={styles.container}>
          <Row className={styles.rowContent}>
            <div className={styles.sideLeft}>
              <h1>Dashboard</h1>
              <div>
                <Line data={months} />
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
                    <option value="Spider-Man: No Way Home">
                      Spider-Man: No Way Home
                    </option>
                    <option value="Jumanji: Welcome to the Jungle">
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
                    onClick={this.handleSubmit}
                    type="submit"
                    className={styles.btnFilter}
                  >
                    Filter
                  </button>
                  <button type="submit" className={styles.btnReset}>
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
