import React, { Component } from "react";
import {connect} from 'react-redux'
import { Form, Col, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { actions } from "../../actions";

export class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.postId,
      name: "",
      message: ""
    };
  }

  handleChange = (e) => {
    this.setState({
        [e.target.name] : e.target.value
    });
  };

  handleSubmit = event => {
    console.log("handleSubmit" , this.state.id)

    this.props.addComment(this.state.id, "Steve", this.state.message);
    this.setState({
      name: "",
      message: ""
    });
    event.preventDefault();
  };

  render() {
    return (
      <Col md={9}>
        <Form onSubmit = {this.handleSubmit}>
          <Form.Control
            as="textarea"
            rows="2"
            name = "message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Write your comments"
          />
          <br />
          <Button type="submit">Leave your comments</Button>
        </Form>
      </Col>
    );
  }
}

CommentForm.propTypes = {
    postId: PropTypes.string.isRequired
};


const mapDispatchToProps = dispatch => {
    return {
        addComment: (postId, name, message) => {
          dispatch(actions.addCommentRequest(postId , name, message))
        }
      }

}


export default connect(null, mapDispatchToProps)(CommentForm);
