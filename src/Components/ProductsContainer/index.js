import React from "react";
import { connect } from "react-redux";
import Loader from "../Common/Loader";
import { getAllProductsThunkCreator } from "../../redux/productsReducer";
import { addProductToBasketAC } from "../../redux/productsReducer";
import { NavLink } from "react-router-dom";
import Product from "./Product/Product";

import "./index.scss";
import basket from "../../assets/img/icons/basket.svg";

class ProductsContainer extends React.Component {
  componentDidMount() {
    this.props.getAllProductsThunkCreator();
  }

  render() {
    const { products, addProductToBasketAC, products_in_basket } = this.props;
    const correctProducts =
      window.location.pathname === "/basket" ? products_in_basket : products;
    return (
      <div>
        {!this.props.isLoaded ? <Loader /> : null}
        <h1 className="header">
          <NavLink to="/">Products </NavLink>
          <div>
            <span>{products_in_basket.length}</span>
            <NavLink to="/basket">
              {" "}
              <img src={basket} alt="basket" />
            </NavLink>
          </div>
        </h1>
        <div className="products">
          {correctProducts.map((product, id) => (
            <Product
              product={product}
              key={id}
              addProductToBasketAC={addProductToBasketAC}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoaded: state.productsPage.isLoaded,
    products: state.productsPage.products,
    products_in_basket: state.productsPage.products_in_basket,
  };
};

export default connect(mapStateToProps, {
  getAllProductsThunkCreator,
  addProductToBasketAC,
})(ProductsContainer);
