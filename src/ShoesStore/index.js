import React, { Component } from "react";
import data from "./data.json";
import ProductList from "./ProductList";
import Modal from "./Modal";

export default class ShoesStore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetail: {},
    };
  }

  setStateModal = (product) => {
    this.setState({
      productDetail: product,
    });
  };

  render() {
    const product = data;

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <div
              className="nav flex-column nav-pills justify-content-center"
              style={{ height: "100vh" }}
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                className="nav-link active"
                id="v-pills-home-tab"
                data-toggle="pill"
                data-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                Home
              </button>
              <button
                className="nav-link"
                id="v-pills-profile-tab"
                data-toggle="pill"
                data-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                Shop
              </button>
            </div>
          </div>
          <div className="col-9">
            <div className="tab-content" id="v-pills-tabContent">
              <div
                className="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
              >
                <ProductList
                  productData={product}
                  setStateModal={this.setStateModal}
                />
                <Modal content={this.state.productDetail} />
              </div>
              <div
                className="tab-pane fade"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
              >
                ...
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
