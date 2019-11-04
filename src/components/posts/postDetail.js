import React, { Component } from "react";
import PropTypes from "prop-types";

import axios from "axios";
import { Container, Row, Button, Card } from "react-bootstrap";

import postBg from "../../images/post-bg.jpg";

import Constants, { BASE_URL } from "../../constants/constants";
import LikeButton from "./LikeButton";

export class PostDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      post: {},
      isError: false,
      errorMessage: ""
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
      .catch(error => {
        this.setState({
          isError: true,
          errorMessage: "Something went wrong with Post Detail API"
        });
        console.log(error);
      });
  };

  render() {
    const { id, title, body, isError, errorMessage } = this.state.post;

    if (isError) {
      return (
        <div>
          <h3>{errorMessage}</h3>
        </div>
      );
    }
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
        <br />
        <Row>{body}</Row>
        <br />

        <Row>
          {" "}
          <LikeButton postID={this.state.id} />
        </Row>
      </Container>
    );
  }
}

export default PostDetail;
