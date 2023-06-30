import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class ProductList extends Component {
  renderShoesList = () => {
    const { productData, setStateModal } = this.props;

    return productData.map((product) => {
      return (
        <div className="col-4 mt-3" key={product.id}>
          <ProductItem item={product} setStateModal={setStateModal} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h1>Shoes shop</h1>
        <div className="row">{this.renderShoesList()}</div>
      </div>
    );
  }
}
