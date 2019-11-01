import React, { Component } from "react";
import PropTypes from "prop-types";

import axios from "axios";
import { Container, Row, Button, Card } from "react-bootstrap";

import postBg from "../../images/post-bg.jpg";

import Constants, { BASE_URL } from "../../constants/constants";

export class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      post: {}
    };
  }

  componentDidMount() {
    this.getPost();
  }

  getPost = () => {
    axios
      .get(BASE_URL + `/posts/${this.state.id}`)
      .then(response => {
        this.setState({
          post: response.data
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    const { title, body } = this.state.post;
    return (
      <Container id="modified-container">
        <Row>
          <Card>
            <Card.Img src={postBg} className="postBg" />
            <Card.Title as="h1" className="postTitle">
              {title}
            </Card.Title>
          </Card>
        </Row>
        <Row>{body}</Row>
      </Container>
    );
  }
}

export default PostDetail;
