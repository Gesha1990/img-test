import {productsAPI} from "../api/api";


const ADD_IMAGES = 'ADD-IMAGES';
const ADD_IMAGE = 'ADD-IMAGE';
const ADD_COMMENTS = 'ADD-COMMENTS';
const CLEAR_IMAGE_AND_COMMENT = 'CLEAR-IMAGE-AND-COMMENT';

let initialState = {
  images:[],
  isLoaded: false,
  image: false,
  comments: false
};

const imgReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMAGES: {
      return {
        ...state,
        images: action.images,
        isLoaded: action.isLoaded
      }
    }
    case ADD_IMAGE: {
      return {
        ...state,
        image: action.image,
        isLoaded: action.isLoaded
      }
    }
    case ADD_COMMENTS: {
      return {
        ...state,
        comments: action.comments,
        isLoaded: action.isLoaded
      }
    }
    case CLEAR_IMAGE_AND_COMMENT: {
      return {
        ...state,
        image: action.image,
        isLoaded: action.isLoaded
      }
    }
    default:
      return state;
  }
};
const addImagesAC = (images) => ({ type: ADD_IMAGES, images});
const addImageAC = (image) => ({ type: ADD_IMAGE, image, isLoaded: true });
const addCommentsAC = (comments) => ({ type: ADD_COMMENTS, comments, isLoaded: true });

export  const clearImageAndCommentAC = (image) => ({ type: CLEAR_IMAGE_AND_COMMENT, image, isLoaded: false });

export const getAllImagesThunkCreator = () => {
  return (dispatch) => {
    productsAPI.getAllImages()
      .then(data => {
        dispatch(addImagesAC(data))
      })
  }
};
export const getImagesThunkCreator = (id) => {
  return (dispatch) => {
    productsAPI.getImageAndComments(id)
      .then(data => {
        dispatch(addImageAC(data))
      })
  }
};
export const getImageThunkCreator = (id) => {
  return (dispatch) => {
    productsAPI.getImage(id)
      .then(data => {
        dispatch(addImageAC(data))
      })
  }
};

export const getCommentsThunkCreator = (id) => {
  return (dispatch) => {
    productsAPI.getComments(id)
      .then(data => {
        dispatch(addCommentsAC(data))
      })
  }
};
export const postCommentsThunkCreator = (description, id) => {
  return (dispatch) => {
    productsAPI.postComments(description, id)
      .then(data => {
        if(data.status === 200){
          alert('comment is added')
        }
      })
  }
};

export default imgReducer;
