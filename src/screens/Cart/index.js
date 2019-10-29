import React, { Component } from 'react'

export default class Cart extends Component {
  render() {
    return (
      <div>
        <h4>Cart</h4>
        <hr />
        <div class="card-body">
          <div class="row">
            <div class="col-12 col-sm-12 col-md-2 text-center">
              <img class="img-fluid" src="https://placehold.it/500x500" alt="Name" />
            </div>
            <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
              <h5 class="product-name"><em><strong>Name</strong></em></h5>
              <h5>
                <small>Description</small>
              </h5>
            </div>
            <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
              <div class="col-3 col-sm-3 col-md-6 text-md-right" style={{ "paddingTop": "5px" }}>
                <h6><strong>0x $0.00</strong></h6>
              </div>
              <div class="col-2 col-sm-2 col-md-2 text-right">
                <a href="/" class="btn btn-outline-danger btn-xs">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                  Remove
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-12 col-sm-12 col-md-2 text-center">
              <img class="img-fluid" src="https://placehold.it/500x500" alt="Name" />
            </div>
            <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
              <h5 class="product-name"><em><strong>Name</strong></em></h5>
              <h5>
                <small>Description</small>
              </h5>
            </div>
            <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
              <div class="col-3 col-sm-3 col-md-6 text-md-right" style={{ "paddingTop": "5px" }}>
                <h6><strong>0x $0.00</strong></h6>
              </div>
              <div class="col-2 col-sm-2 col-md-2 text-right">
                <a href="/" class="btn btn-outline-danger btn-xs">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                  Remove
                </a>
              </div>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-12 col-sm-12 col-md-2 text-center">
              <img class="img-fluid" src="https://placehold.it/500x500" alt="Name" />
            </div>
            <div class="col-12 text-sm-center col-sm-12 text-md-left col-md-6">
              <h5 class="product-name"><em><strong>Name</strong></em></h5>
              <h5>
                <small>Description</small>
              </h5>
            </div>
            <div class="col-12 col-sm-12 text-sm-center col-md-4 text-md-right row">
              <div class="col-3 col-sm-3 col-md-6 text-md-right" style={{ "paddingTop": "5px" }}>
                <h6><strong>0x $0.00</strong></h6>
              </div>
              <div class="col-2 col-sm-2 col-md-2 text-right">
                <a href="/" class="btn btn-outline-danger btn-xs">
                  <i class="fa fa-trash" aria-hidden="true"></i>
                  Remove
                </a>
              </div>
            </div>
          </div>
          <hr />
        </div>
        <div class="card-footer">
          <div class="coupon col-md-5 col-sm-5 no-padding-left pull-left">
            <form action="/" method="POST">
              <div class="row">
                <div class="col-6">
                  <input id="coupon-entry" class="form-control" placeholder="Coupon code" />
                </div>
                <div class="col-6">
                  <a class="btn btn-outline-dark" href="/">Use coupon</a>
                </div>
              </div>
            </form>
            <div class="row">
              <div class="col-md-6">
                <div style={{ "margin": "5px 0" }}>
                  Subtotal: <b class="float-right">$0.00</b>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div style={{ "margin": "5px 0" }}>
                  Tax: <b class="float-right">$0.00</b>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div style={{ "margin": "5px 0", "color": "red" }}>
                  Discount: <span class="float-right">- 50%</span>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div style={{ "margin": "5px 0" }}>
                  Total: <b class="float-right">$0.00</b>
                </div>
                <button id="checkout-button" type="button" class="btn btn-success" style={{ "margin": "10px 0" }}>Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
