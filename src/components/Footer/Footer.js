import React, { Component } from "react";
import styles from "./Footer.module.css";
import imgLogo from "../../assets/img/Tickitz p.png";
import imgCineone from "../../assets/img/cineone21.png";
import imgHiflix from "../../assets/img/hiflix.png";
import imgEbuid from "../../assets/img/ebu.id.png";
import imgFacebook from "../../assets/img/fb.png";
import imgInstagram from "../../assets/img/ig.png";
import imgYoutube from "../../assets/img/yt.png";
import imgTwitter from "../../assets/img/tweeter.png";

class Footer extends Component {
  render() {
    return (
      <>
        <footer>
          <div className={styles.footerLeft}>
            <img src={imgLogo} alt="Logo" />
            <p>
              Stop waiting in line. Buy tickets conveniently, watch movies
              quietly.
            </p>
          </div>
          <div className={styles.footerCenterLeft}>
            <h2>Explore</h2>
            <p>Cinemas</p>
            <p>Movie List</p>
            <p>My Ticket</p>
            <p>Notification</p>
          </div>
          <div className={styles.footerCenterRight}>
            <h2>Our Sponsor</h2>
            <img src={imgEbuid} alt="ebuid" />
            <img className={styles.cineOne} src={imgCineone} alt="cineone21" />
            <img src={imgHiflix} alt="hiflix" />
          </div>
          <div className={styles.footerRight}>
            <h2>Follow us</h2>
            <div className={styles.facebook}>
              <img src={imgFacebook} alt="fb" />
              <p>Tickitz Cinema id</p>
            </div>
            <div className={styles.instagram}>
              <img src={imgInstagram} alt="ig" />
              <p>tickitz.id</p>
            </div>
            <div className={styles.tweeter}>
              <img src={imgTwitter} alt="tweeter" />
              <p>tickitz.id</p>
            </div>
            <div className={styles.youtube}>
              <img src={imgYoutube} alt="yt" />
              <p>Tickitz Cinema id</p>
            </div>
          </div>
        </footer>
        <footer className={styles.copyRight}>
          © 2020 Tickitz. All Rights Reserved.
        </footer>
      </>
    );
  }
}

export default Footer;
