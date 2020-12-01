import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAllImagesThunkCreator } from "../../redux/imgReducer";
import ImageModal from '../ImageModal/index'

import "./index.scss";

const ImagesContainer = ({ getAllImagesThunkCreator, images, isLoaded }) => {
  const [modalWindowId, setOpenCloseModalWindow] = useState(false);
  useEffect(() => {
    getAllImagesThunkCreator();
  }, []);
  
  return (
    <div>
      <div className="images">
        {images &&
          images.map((img, key) => {
            return (
              <div key={key}>
                <img
                  src={img.src}
                  alt="img"
                  onClick={() => {
                    setOpenCloseModalWindow(img.image_id);
                  }}
                />
              </div>
            );
          })}
      </div>
      {modalWindowId && <ImageModal id={modalWindowId} closeModalWindow={setOpenCloseModalWindow}/>}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoaded: state.imagesPage.isLoaded,
    images: state.imagesPage.images,
    imageAndComment: state.imagesPage.imageAndComment,
  };
};

export default connect(mapStateToProps, {
  getAllImagesThunkCreator,
})(ImagesContainer);
