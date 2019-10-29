import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <NavLink className="navbar-brand" to="/">Simple Shopping Cart</NavLink>
        <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="selected">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/shop" activeClassName="active">Shop</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav m1-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/cart" activeClassName="active">
                <FontAwesomeIcon icon={faShoppingBasket} />
                &nbsp;<span className="badge badge-secondary">0 | $0.00</span></NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}
