import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Row, Container, Button, Col } from "react-bootstrap";
import Icon from "@material-ui/core/Icon";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";

import editImage from "../../images/edit-image.png";

import Searchbar from './searchBar'

export class PostListAddons extends Component {

  constructor(props) {
    super(props);
    this.state = {
      handleSubmit: props.handleSubmit
    };
  }

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
          <Col><Searchbar handleSubmit ={this.state.handleSubmit} /></Col>
        </Row>
      </Container>
    );
  }
}
PostListAddons.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default PostListAddons;
