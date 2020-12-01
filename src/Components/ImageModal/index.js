import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import {
  getImageThunkCreator,
  clearImageAndCommentAC,
  getCommentsThunkCreator,
  postCommentsThunkCreator
} from "../../redux/imgReducer";
import useOutsideClick from "../../Helpers/helpers";
import Loader from "../Common/Loader";

import "./style.scss";

const ImagesContainer = ({
  getImageThunkCreator,
  imageAndComment,
  closeModalWindow,
  id,
  isLoaded,
  comments,
  clearImageAndCommentAC,
  getCommentsThunkCreator,
  postCommentsThunkCreator
}) => {
  useEffect(() => {
    getImageThunkCreator(id);
    getCommentsThunkCreator(id)
  }, []);
  const ref = useRef();
  const [comment, setComment] = useState('')
  useOutsideClick(ref, () => {
    closeModalWindow(false);
    clearImageAndCommentAC(false);
  });
  return (
    <div className="image-wrapper">
      {!isLoaded ? (
        <Loader />
      ) : (
        <div className="image-wrapper__img" ref={ref}>
          <img src={imageAndComment.src} alt="img" />
          <div className="comments-wrapper">
            <input type="text" value={comment} onChange={(e)=>{
              setComment(e.target.value)
            }}/> 
            <div className="comments-wrapper__btn" onClick={()=>{
              postCommentsThunkCreator(comment, id)
              closeModalWindow(false);
            }}>Add comment</div>
          </div>
          {Array.isArray(comments) && comments.map((comment, id)=>{
            return(
              <div key={id}>
            <div>{comment.description}</div>
            <div>{comment.name}</div>
            </div>
            )
          })}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoaded: state.imagesPage.isLoaded,
    imageAndComment: state.imagesPage.image,
    comments: state.imagesPage.comments
  };
};

export default connect(mapStateToProps, {
  getImageThunkCreator,
  getCommentsThunkCreator,
  clearImageAndCommentAC,
  postCommentsThunkCreator
})(ImagesContainer);
