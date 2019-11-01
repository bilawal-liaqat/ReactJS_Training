import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Container, Button, Col } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import Image from "react-bootstrap/Image";

import editImage from "../../images/edit-image.png";

export class PostListAddons extends Component {
  render() {
    return (
      <Container fluid id="modified-container">
        <Row>
          <Col className="mb-10">
            <Row>
              <Image src={editImage} className="editIcon" />
              &nbsp;
              <h2>Posts</h2>
              &nbsp;
              <Link to="/post/new">
                <Button> Add new</Button>
              </Link>
            </Row>
          </Col>
          <Col md={6} />
          <Col>{/* Searchbar area */}</Col>
        </Row>
      </Container>
    );
  }
}

export default PostListAddons;
