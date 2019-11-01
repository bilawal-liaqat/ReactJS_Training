import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div>
      <Container fluid id="modified-container">
        <div className="logo">
          <Link to="/">
            <Image src={logo} className="img-responsive" />
          </Link>
        </div>
      </Container>
      <div className="dropdown-divider" />
    </div>
  );
};

export default Header;
