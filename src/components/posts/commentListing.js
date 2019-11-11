import React, { Component } from "react";
import { Media, ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { actions } from "../../actions";
import profileImage from '../../images/profileImage.jpg'

export class CommentListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.postId
    };
  }

  getComments = () => {
    this.props.getComments(this.state.id)
  };

  componentDidMount() {
    this.getComments();
  }
  getFormattedDate = date => {
    let DATE_OPTIONS = {
      year: "numeric",
      month: "short",
      day: "numeric"
    };
    let commentDate = new Date(date * 1000);
    let formattedDate = commentDate
      .toLocaleDateString("en-GB", DATE_OPTIONS)
      .toString();
    return formattedDate;
  };

  handleDelete = (commentId) => {
    this.props.deleteComment(this.state.id, commentId );

  }
  render() {
    return (
      <ListGroup>
        {this.props.comments.map(comment => (
          <div key={comment.id}>
            <Media as="li">
              <img
                src = {profileImage}
                className="mr-3 roundedCircle"
                alt="user profile"
                width={64}
                height={64}
              />
              <Media.Body>
                <h5 className="CommentUser">{comment.name}</h5>
                <p className="CommentDate">
                  {this.getFormattedDate(comment.createdAt)}
                </p>
                <p className="CommentMessage">{comment.message}</p>
                <p>
                  <span
                    onClick={() => this.handleDelete(comment.id)}
                    className="MockLink"
                  >
                    Delete
                  </span>
                </p>
              </Media.Body>
            </Media>
            <div className="dropdown-divider" />
          </div>
        ))}
      </ListGroup>
    );
  }
}

CommentListing.propTypes = {
  postId: PropTypes.string.isRequired
};

const mapStateToProps = (state) => {
  return {
    comments: state.commentsReducer.comments
  };
}

const mapDispatchToProps = dispatch => {
  return {
    getComments: (postId) => dispatch(actions.getCommentsRequest(postId)),
    deleteComment: (postId , commentId) => dispatch(actions.deleteCommentRequest(postId , commentId))
  }
}

//const getCommentsReqeust = payload => actions.getCommentsRequest(payload);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentListing);
