import React, { Component } from "react";

import ThumbUp from "@material-ui/icons/ThumbUp";
import ThumbDown from "@material-ui/icons/ThumbDown";
import { Button } from "react-bootstrap";
import axios from "axios";

import Constants, { BASE_URL } from "../../constants/constants";

export class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postID: props.postID,
      isLike: false,
      totalLikes: 0,
      likes: []
    };
  }

  componentDidMount() {
    this.getSavedUserLike();
    this.getLikes();
  }

  saveUserLike = () => {
    console.log(`saveUserLike before isLike: ${this.state.isLike}`);

    localStorage.setItem(this.state.postID, !this.state.isLike);
    this.setState({
      isLike: !this.state.isLike
    });
    this.getLikes();
    // this.setState({
    //     totalLikes: this.state.isLike ? this.state.totalLikes + 1 : this.state.totalLikes -1
    // });
  };

  getSavedUserLike = () => {
    const isLike = localStorage.getItem(this.state.postID) === "true";
    console.log(`getSavedUserLike isLike: ${isLike}`);

    this.setState({
      isLike: isLike
    });
  };

  getLikes = () => {
    axios
      .get(BASE_URL + `/posts/${this.state.postID}/likes`)
      .then(response => {
        this.setState({
          likes: response.data,
          totalLikes: response.data.length
        });
      })
      .catch(error => {
        this.setState({
          isError: true,
          errorMessage: "Something went wrong with Likes Get API"
        });
        console.log(error);
      });
  };

  doLike = () => {
    const { isLike } = this.state;
    console.log(isLike);
    let apiRequest = null;
    if (!isLike) {
      apiRequest = axios.post(BASE_URL + `/posts/${this.state.postID}/likes`);
    } else {
      apiRequest = axios.delete(
        BASE_URL + `/posts/${this.state.postID}/likes/${this.state.likes[1].id}`
      );
    }

    apiRequest
      .then(response => {
        this.saveUserLike();
      })
      .catch(error => {
        this.setState({
          isError: true,
          errorMessage: "Something went wrong with Likes Get API"
        });
        console.log(error);
      });
  };

  handleLikeClick = () => {
    this.doLike();
  };

  render() {
    const { isLike, isError, errorMessage } = this.state;

    if (isError) {
      return (
        <div>
          <h3>{errorMessage}</h3>
        </div>
      );
    }
    return (
      <div>
        <Button
          variant={isLike ? "danger" : "success"}
          onClick={this.handleLikeClick}
        >
          {this.state.totalLikes}
          {isLike ? <ThumbDown /> : <ThumbUp />}
        </Button>
      </div>
    );
  }
}

export default LikeButton;
