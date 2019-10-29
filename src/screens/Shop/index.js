import React, { Component } from 'react'

export default class Shop extends Component {
  render() {
    return (
      <div>
        <h4>Shop</h4>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div class="card-deck">
              <div class="card">
                <div className="card-header">
                  <h5 class="card-title">
                    Product Name
                  <span className="float-right">$0.00</span>
                  </h5>
                </div>
                <img class="card-img-top" className="img-fluid" src="https://placehold.it/500x500" alt="Description" />
                <div class="card-body">
                  <button className="btn btn-success btn-block">Add to cart</button>
                </div>
                <div class="card-footer">
                  <p class="card-text">Product Description</p>
                </div>
              </div>
              <div class="card">
                <div className="card-header">
                  <h5 class="card-title">
                    Product Name
                  <span className="float-right">$0.00</span>
                  </h5>
                </div>
                <img class="card-img-top" className="img-fluid" src="https://placehold.it/500x500" alt="Description" />
                <div class="card-body">
                  <button className="btn btn-success btn-block">Add to cart</button>
                </div>
                <div class="card-footer">
                  <p class="card-text">Product Description</p>
                </div>
              </div>
              <div class="card">
                <div className="card-header">
                  <h5 class="card-title">
                    Product Name
                  <span className="float-right">$0.00</span>
                  </h5>
                </div>
                <img class="card-img-top" className="img-fluid" src="https://placehold.it/500x500" alt="Description" />
                <div class="card-body">
                  <button className="btn btn-success btn-block">Add to cart</button>
                </div>
                <div class="card-footer">
                  <p class="card-text">Product Description</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
