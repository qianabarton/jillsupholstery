import React, { Component } from "react";
import { Row, Col, Container, Button } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";

export default class Home extends Component {
  render() {
    return (
      <div className="home-page">
        <div className="ovals">
        <Header />
      </div>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div>
        <div className="header container m-center">
          <h1 className="mb-4">
            Hi, I'm
            <span className="blue-accent"> Qiana</span>.
          </h1>
          <h2>
            UX Interaction Designer & Developer
          </h2>
          <HashLink smooth to="#projects">
            <Button className="mt-4 header-button">View My Projects</Button>
          </HashLink>
        </div>
      </div>
    );
  }
}