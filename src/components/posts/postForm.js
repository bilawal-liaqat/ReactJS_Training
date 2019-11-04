import React, { Component } from "react";
import PropTypes from "prop-types";

import { withRouter } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Row,
  Button,
  Card,
  Form,
  Col,
  Alert
} from "react-bootstrap";

import Constants, { BASE_URL } from "../../constants/constants";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      title: "",
      body: "",
      tags: "",
      erroMessage: "",
      formValidationMessage: "",
      isError: false,
      isUnvalidForm: false,
      isEdit: true
    };
  }

  componentDidMount() {
    if (this.state.id === undefined) {
      this.setState({
        isEdit: false
      });
    } else {
      this.getPost();
    }
  }

  // Event Handling

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleFormSubmit = e => {
    const { isEdit } = this.state;
    e.preventDefault();

    const { title, body, tags } = this.state;

    if (!title.length || !body.length) {
      this.setState({
        isUnvalidForm: true,
        formValidationMessage: "Title or Body is missing."
      });
      return;
    }

    const post = { title, body, tags };

    if (isEdit) {
      this.updatePost(post);
    } else {
      this.submitPost(post);
    }
  };
  validateForm = () => {};

  render() {
    const {
      title,
      body,
      tags,
      isError,
      errorMessage,
      isEdit,
      formValidationMessage,
      isUnvalidForm
    } = this.state;

    if (isError) {
      return <Alert variant="danger"> {errorMessage} </Alert>;
    }

    return (
      <Container fluid>
        <h1 className="left-alight">
          {isEdit ? "Edit Post" : " Add New Post"}
        </h1>
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
             &nbsp;

              {isUnvalidForm ? (
                <Alert variant="danger"> {formValidationMessage} </Alert>
              ) : null}
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
                {isEdit ? "Update" : "Publish"}
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    );
  }

  // Networks calls
  updatePost = post => {
    axios
      .put(BASE_URL + `/posts/${this.state.id}`, post)
      .then(response => {
        console.log(response.data);
        this.props.history.push("/");
      })
      .catch(error =>{
        this.setState({
          isError: true,
          errorMessage: "Something went wrong with Update Post API"
        })
      console.log(error)
      }
        );
  };
  submitPost = post => {
    axios
      .post(BASE_URL + `/posts/`, post)
      .then(response => {
        console.log(response.data);
        this.props.history.push("/");
      })
      .catch(error =>{
        this.setState({
          isError: true,
          errorMessage: "Something went wrong with Post API"
        })
      console.log(error)
      }
        );
  };
  getPost = () => {
    axios
      .get(BASE_URL + `/posts/${this.state.id}`)
      .then(response => {
        this.setState({
          title: response.data.title,
          body: response.data.body,
          tags: response.data.tags
        });
      })
      .catch(error =>{
        this.setState({
          isError: true,
          errorMessage: "Something went wrong with Get Post API"
        })
      console.log(error)
      }
        );
  };
}

export default withRouter(PostForm);
