import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Table, Container } from "react-bootstrap";
import axios from "axios";

import Constants, { BASE_URL } from "../../constants/constants";
import PostListAddons from "./postListAddons";

export class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.getPosts();
  }

  getPosts = () => {
    axios
      .get(BASE_URL + "/posts?sortBy=createdAt&order=desc")
      .then(response => {
        this.setState({
          posts: response.data
        });
      })
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div>
        <PostListAddons />
        <Container fluid id="modified-container">
          <Table responsive striped hover size="sm">
            <thead className="thead-dark">
              <tr>
                <th> Title</th>
                <th> Tags</th>
                <th> Date</th>
                <th> Actions</th>
              </tr>
            </thead>

            <tbody>
              {this.state.posts.map(post => (
                <tr>
                  <td>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                  </td>
                  <td>{post.tags}</td>
                  <td>
                    {new Date(post.createdAt).toLocaleDateString("en-US")}
                  </td>
                  <td>Edit | Delete</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}

export default PostList;
