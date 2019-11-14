import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "../constants/actionTypes";


const initialState = {
  posts: [],
  pageNum: 1,
  end: false,
  apiRestrict: false,
  error: false,
  errorMessage: ""
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    // Get all posts
    case GET_POSTS_REQUEST:
      console.log("GET_POSTS_REQUEST", action.payload);
      return {
        ...state,
        posts: [],
        pageNum: 1
      };

    case GET_POSTS_SUCCESS:
            console.log("GET_POSTS_SUCCESS", action.payload);

      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        pageNum: state.payload + 1,
        apiRestrict: false
      };

    case GET_POSTS_FAILURE:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error
      };

      default:
      return state;
  }
};

export default postsReducer;
