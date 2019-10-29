import React, { Component } from 'react'

export default class Shop extends Component {
  render() {
    return (
      <div>
        <h4>Shop</h4>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="card-deck">
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">
                    Product Name
                  <span className="float-right">$0.00</span>
                  </h5>
                </div>
                <img className="card-img-top" className="img-fluid" src="https://placehold.it/500x500" alt="Description" />
                <div className="card-body">
                  <button className="btn btn-success btn-block">Add to cart</button>
                </div>
                <div className="card-footer">
                  <p className="card-text">Product Description</p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">
                    Product Name
                  <span className="float-right">$0.00</span>
                  </h5>
                </div>
                <img className="card-img-top" className="img-fluid" src="https://placehold.it/500x500" alt="Description" />
                <div className="card-body">
                  <button className="btn btn-success btn-block">Add to cart</button>
                </div>
                <div className="card-footer">
                  <p className="card-text">Product Description</p>
                </div>
              </div>
              <div className="card">
                <div className="card-header">
                  <h5 className="card-title">
                    Product Name
                  <span className="float-right">$0.00</span>
                  </h5>
                </div>
                <img className="card-img-top" className="img-fluid" src="https://placehold.it/500x500" alt="Description" />
                <div className="card-body">
                  <button className="btn btn-success btn-block">Add to cart</button>
                </div>
                <div className="card-footer">
                  <p className="card-text">Product Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
