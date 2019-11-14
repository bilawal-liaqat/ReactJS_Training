import axios from "axios";
import { BASE_URL } from "../constants/constants";



const axiosInstance = axios.create({
    baseURL: BASE_URL,
    timeout: 10000
  });

const API = {

    // get all posts

getPosts: (pageNum , searchKeyword ) => {
  return axiosInstance.get(`posts?sortBy=id&page=${pageNum}&limit=12&order=desc&search=${searchKeyword}`);
},


  // get all comments of a post
  getComments: postId => {
    return axiosInstance.get(`/posts/${postId}/comments?sortBy=createdAt&order=desc`);
  },

  // get single comment of a post
  getComment: (postId, commentId) => {
    return axiosInstance.get(`/posts/${postId}/comments/${commentId}`);
  },

  // submit new comment on a post
  submitComment: payload => {
    return axiosInstance.post(`/posts/${payload.postId}/comments`, {
      name: payload.name,
      message: payload.message
    });
  },

  // Delete a comment of a post
  deleteComment: payload => {
    console.log("deleteComment" , payload.postId , payload.commentId)

    return axiosInstance.delete(
      `/posts/${payload.postId}/comments/${payload.commentId}`
    );
  },

}


export default API;