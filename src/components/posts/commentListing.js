import React, { Component } from 'react'
import { Media, ListGroup } from "react-bootstrap";


export class CommentListing extends Component {


    constructor(props) {
        super(props);
        this.state = {
          id: props.postId
        };
      }

    render() {
        return (
            <ListGroup>
          {this.props.comments.map(comment => (
            <div key={comment.id}>
              <Media as="li">
                <img
                  src={UserImage}
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
        )
    }
}

export default CommentListing
