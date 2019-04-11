import React, { Component } from 'react'

export default class Filter extends Component {
  render() {
    return (
      <div className="filters">
        <div className="category p-1">
        <h3>Categories</h3>
        <ul>
          <li>
            <a href="/">New Arrivals</a>
          </li>
          <li>
            <a href="/">Featured Brands</a>
          </li>
          <li>
            <a href="/">Today's Deals</a>
          </li>
          <li>  
            <a href="/">Latest Watches</a>
          </li>
        </ul>
        </div>
        <div className="color p-1">
        <h3>Color</h3>
        <ul>
          <li>
            <a href="/">
              <span style={{color: 'red'}}>
                <i className="fa fa-circle"/>
              </span> Red
            </a>
          </li>
          <li>
            <a href="/">
              <span style={{color: 'brown'}}>
                <i className="fa fa-circle"/>
              </span> Brown
            </a>
          </li>
          <li>
            <a href="/">
              <span style={{color: 'yellow'}}>
                <i className="fa fa-circle"/>
              </span> Yellow
            </a>
          </li>
          <li>
            <a href="/">
              <span style={{color: 'violet'}}>
                <i className="fa fa-circle"/>
              </span> Violet
            </a>
          </li>
          <li>
            <a href="/">
              <span style={{color: 'orange'}}>
                <i className="fa fa-circle"/>
              </span> Orange
            </a>
          </li>
          <li>
            <a href="/">
              <span style={{color: 'blue'}}>
                <i className="fa fa-circle"/>
              </span> Blue
            </a>
          </li>
        </ul>
        </div>
        <div className="price p-1">
        <h3>Price</h3>
        <ul>
          <li>
            <a href="/">Below $300</a>
          </li>
          <li>
            <a href="/">$ 300 - 700</a>
          </li>
          <li>
            <a href="/">$ 1K - 2K</a>
          </li>
          <li>
            <a href="/">$ Above 2K</a>
          </li>
        </ul>
        </div>
      </div>
    )
  }
}
