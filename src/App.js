import React, { Component } from 'react'
import Navbar from './components/Navbar'
import { Switch, Route } from 'react-router-dom'

import Home from './screens/Home'
import Shop from './screens/Shop'
import Cart from './screens/Cart'

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />

        <div className="container">
          <Switch>
            <Route exact path='/' render={() => <Home />} />
            <Route path='/shop' render={() => <Shop />} />
            <Route path='/cart' render={() => <Cart />} />
          </Switch>
        </div>
      </div>
    )
  }
}
