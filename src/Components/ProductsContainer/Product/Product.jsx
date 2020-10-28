import React from "react";
import './index.scss';

import electronics from "../../../assets/img/electronics.png";
import add from "../../../assets/img/icons/add.svg";
const Product = ({product, key, addProductToBasketAC}) => {
const {title} = product
  return (
    <div className="product" key={key}>
      <div className="product__title-wrapper">
        <h1 >{title}</h1>
        <img src={add} alt="add" onClick={()=>{addProductToBasketAC(product)}}/>
      </div>
      <img src={electronics} className="product-icon" alt="img" />
    </div>
  );
};

export default Product;
