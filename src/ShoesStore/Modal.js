import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;

    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h3 className="modal-title">{content.name}</h3>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body text-left">
                <img src={content.image} alt="image" className="img-fluid" />
                <p>
                  <b>Description:</b> {content.description}
                </p>
                <p>
                  <b>Quantity:</b> {content.quantity}
                </p>
                <p>
                  <b>Price:</b> ${content.price}
                </p>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
