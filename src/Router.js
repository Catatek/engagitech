import React, { Component } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Index from './components/Index/Index'

class Router extends Component {
  render () {
    return <div className='Router'>
      <BrowserRouter>
        <Route exact path to='/' component={Index}></Route>
      </BrowserRouter>
    </div>
  }
}

export default Router
