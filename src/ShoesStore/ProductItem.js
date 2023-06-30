import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item, setStateModal } = this.props;

    return (
      <div className="card text-left">
        <img className="card-img-top img-fluid" src={item.image} alt="image" />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">${item.price}</p>
          <button className="btn btn-dark">
            Add to cart <i className="fa fa-cart-arrow-down"></i>
          </button>
          <button
            className="btn btn-success ml-3"
            data-toggle="modal"
            data-target="#modelId"
            onClick={() => {
              setStateModal(item);
            }}
          >
            See details
          </button>
        </div>
      </div>
    );
  }
}
