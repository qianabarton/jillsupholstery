import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

import bg from "../img/hero-desktop.png";

export default class Home extends Component {
  render() {
    return (
      <div className="hero-bg">
        <div className="hero-image">
          <Header />
        </div>
      </div>

    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="hero-box d-flex flex-row">
        <div className="hero-content d-flex flex-column">
          <h1 className="mb-3">
            Coming Soon
          </h1>
          <h2>
          Our website is currently under construction but will be available soon. In the meantime, contact me for a quote or check out my business page on <a href="https://yelp.to/C57TJNjtWlb"><span className="accent">Yelp</span></a>.
          </h2>         
            <Button className="mt-4 header-button" onclick="window.open('tel:5035510543');"> Call or Text (503) 551-0543</Button>         
        </div>
      </div>
    );
  }
}