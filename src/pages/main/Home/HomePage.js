import React, { Component } from "react";
import Navbar from "../../../components/NavBar/NavBar";
import Footer from "../../../components/Footer/Footer";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./home.module.css";
import img1 from "../../../assets/img/image-1.png";
import img2 from "../../../assets/img/image-2.png";
import img3 from "../../../assets/img/image-3.png";
import card1 from "../../../assets/img/card-movie1.png";
// import card2 from "../../../assets/img/card-movie2.png"
// import card3 from "../../../assets/img/card-movie3.png"

class HomePage extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Container className={styles.container}>
          <Row className={styles.row1}>
            <Col sm={6} className={styles.col1}>
              <p> Nearest Cinema, Newest Movie,</p>
              <p className={styles.textCol1}>Find out now!</p>
            </Col>
            <Col sm={6} className={styles.col2}>
              <img className={styles.img1} src={img1} alt="img-1" />
              <img className={styles.img2} src={img2} alt="img-2" />
              <img className={styles.img3} src={img3} alt="img-3" />
            </Col>
          </Row>
          <div className={styles.content1}>
            <div className={styles.showing}>
              <div className={styles.nowShowing}>
                <h1>Now Showing</h1>
                <div className={styles.borderBottom}></div>
              </div>
              <p>View all</p>
            </div>
            <div className={styles.cards}>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
                <p className={styles.buttonBookNow}>Book Now</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
                <p className={styles.buttonBookNow}>Book Now</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
                <p className={styles.buttonBookNow}>Book Now</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
                <p className={styles.buttonBookNow}>Book Now</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
                <p className={styles.buttonBookNow}>Book Now</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
                <p className={styles.buttonBookNow}>Book Now</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
                <p className={styles.buttonBookNow}>Book Now</p>
              </div>
            </div>
          </div>

          <div className={styles.content2}>
            <div className={styles.upcoming}>
              <p className={styles.upcomingMovies}>Upcoming Movies</p>
              <p>View all</p>
            </div>

            <div className={styles.month}>
              <p>January</p>
              <p>February</p>
              <p>March</p>
              <p>April</p>
              <p>May</p>
              <p>Juny</p>
              <p>July</p>
              <p>August</p>
              <p>September</p>
              <p>October</p>
              <p>Desember</p>
            </div>

            <div className={styles.cards}>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
              </div>
              <div className={styles.imgCard}>
                <img src={card1} alt={card1} />
                <p className={styles.movieName}>Spider-Man:Homecoming</p>
                <p className={styles.genre}>Acion, Adventure, Sci-FI</p>
                <p className={styles.buttonDetail}>Details</p>
              </div>
            </div>
          </div>

          <div className={styles.content3}>
            <p>Be the vanguard of the</p>
            <h1>Moviegoers</h1>
            <div className={styles.input}>
              <input placeholder="Type your email"></input>
              <button>Join Now</button>
              <p>
                By joining you as a Tickitz member, <br />
                we will always send you the latest updates via email .
              </p>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
  }
}

export default HomePage;
