import React, { Component } from "react";
import { Link } from "react-router-dom";

import { Table, Container ,Alert} from "react-bootstrap";
import axios from "axios";
import {connect} from 'react-redux'

import Constants, { BASE_URL } from "../../constants/constants";
import PostListAddons from "./postListAddons";
import { actions } from "../../actions";

export class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isError: false,
      errorMessage: '',
      isSearch: false,
      searchKeyword: '',
      pageNum: 1
    };
  }

  
// Event Handling
 handleDeletePost = (id) => {
  this.deletePost(id);
};
// Network Calls
 deletePost = (id) => {
  axios
  .delete(BASE_URL + `/posts/${id}`)
    .then(response => {
       this.getPosts();
      this.setState({
   //    posts: this.posts.filter(post => post.id != id)
      })
    })
    .catch(error => {
      this.setState({
        isError: true,
        errorMessage: "Something went wrong with Delete Post API"
      })
      console.log(error)});
};

//  getPosts = () => {
//   axios
//     .get(BASE_URL + "/posts?sortBy=createdAt&order=desc")
//     .then(response => {
//       this.setState({
//         posts: response.data
//       });
//     })
//     .catch(error =>{
//       this.setState({
//         isError: true,
//         errorMessage: "Something went wrong with Post Listing API"
//       })
//     console.log(error)
//     }
//       );
// };

  componentDidMount() {
    //const { getPosts} = this.props;
    this.props.getPosts( 1,  this.state.searchKeyword, false )
  }


  handleSearchSubmit = keyword => {
    console.log(keyword)
  }

  render() {
    console.log(" postList render");

    const {isError , errorMessage} = this.state
    if (isError) {
      return <Alert variant="danger"> {errorMessage} </Alert>;
    }
    return (
      <div>
        <PostListAddons handleSubmit = {this.handleSearchSubmit}/>
        <Container fluid id="modified-container">
          <Table responsive striped hover size="sm">
            <thead className="thead-dark">
              <tr>
               <th> ID</th>
                <th> Title</th>
                <th> Tags</th>
                <th> Date</th>
                <th> Actions</th>
              </tr>
            </thead>

            <tbody>
              {console.log(this.props.posts)
              }
              {this.props.posts.map(post => (
                
                <tr id = {post.id}>
                  <td>{post.id}</td>
                  <td>
                    <Link to={`/post/${post.id}`}>{post.title}</Link>
                  </td>
                  <td>{post.tags}</td>
                  <td>
                    {new Date(post.createdAt).toLocaleDateString("en-US")}
                  </td>
                  <td>
                    <Link to={`/post/edit/${post.id}`}>Edit</Link> | {" "} 
                    <Link to="#" onClick={() => this.handleDeletePost(post.id)}>
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  console.log("mapStateToProps", state);

  return {
    posts: state.postsReducer.posts,
    num: state.postsReducer.pageNum,
    end: state.postsReducer.end,
    apiRestrict: state.postsReducer.apiRestrict
  };
};

const mapDispatchToProps = dispatch => {
  return {
  getPosts: (pageNum , searchKeyword , isSearch) => dispatch(actions.getPostsRequest(pageNum, searchKeyword, isSearch))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
