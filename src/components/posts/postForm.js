import React, { Component } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import axios from "axios";
import { Container, Row, Button, Card, Form, Col } from "react-bootstrap";

import Constants, { BASE_URL } from "../../constants/constants";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      post: {},
      title: "",
      body: "",
      tags: "",
      erroMessage: "",
      isError: false
    };
  }

  componentDidMount() {
    // this.getPost()
  }

  // Event Handling

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleFormSubmit = e => {
    e.preventDefault();
    this.submitPost();
  };
  validateForm = () => {};

  render() {
    const { title, body, tags , isError, errorMessage } = this.state;
    return (
      <Container fluid>
        <h1 className="left-alight"> Add New Post</h1>
        <Form onSubmit={this.handleFormSubmit}>
          <Row>
            <Col md={9}>
              <Form.Control
                type="text"
                placeholder="Post title"
                name="title"
                value={title}
                onChange={this.handleOnChange}
              />
              &nbsp;
              <Form.Control
                as="textarea"
                name="body"
                row="20"
                value={body}
                onChange={this.handleOnChange}
              />
              <br />
              <br />
              <Form.Text className="error">{isError && errorMessage}</Form.Text>
            </Col>
            <Col md={3}>
              <Form.Label className="left-alight">Post Tags</Form.Label>
              <Form.Control
                type="text"
                placeholder="tag1, tag2"
                name="tags"
                value={tags}
                onChange={this.handleOnChange}
              />
              <Form.Text className="left-alight">
                Seprate tags with comma
              </Form.Text>
              &nbsp;
              <Button block type="submit">
                {" "}
                Publish{" "}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }

  // Networks calls
  submitPost = () => {
    const { title, body, tags } = this.state;

    if (!title.length || !body.length){
        this.setState({
            isError: true,
            errorMessage: "Error: Title or Body is missing."
        })
        return;
    }
    axios
      .post(BASE_URL + `/posts/`, { title, body, tags })
      .then(response => {
        console.log(response.data);
        this.props.history.push("/");
      })
      .catch(error => console.log(error.data));
  };
  getPost = () => {
    axios
      .get("${BASE_URL}/posts/${this.state.id}")
      .then(response => {
        this.setState({
          post: response.data
        });
      })
      .catch(error => console.log(error));
  };
}

export default withRouter(PostForm);
