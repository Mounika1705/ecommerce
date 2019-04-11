import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-danger text-uppercase">
        <button className="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarNav" aria-controls="navbarNav" 
          aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <SearchBar className="form-inline my-2">
          <input className="form-control" type="search"
            placeholder="Search" aria-label="Search"></input>
          <i className="fa fa-search ml-n4"></i>
        </SearchBar>
        <div className="collapse navbar-collapse justify-content-center"
          id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item px-4">
              <NavLink to="/" exact
                activeClassName="active" className="nav-link">Home</NavLink>
            </li>
            <li className="nav-item px-4">
              <NavLink to="/about"
                activeClassName="active" className="nav-link">About</NavLink>
            </li>
            <li className="nav-item dropdown px-4">
              <NavLink to="/products" activeClassName="active" 
                className="nav-link">Products
              </NavLink>
              <a href="#" className="nav-link dropdown-toggle" id="navbardrop" 
                data-toggle="dropdown"></a>
              <div className="dropdown-menu text-danger">
                <a className="dropdown-item" href="#">Mobiles</a>
                <a className="dropdown-item" href="#">Tablets</a>
                <a className="dropdown-item" href="#">Laptops</a>
                <a className="dropdown-item" href="#">Wearables</a>
                <a className="dropdown-item" href="#">Printers</a>
              </div>
            </li>
            <li className="nav-item px-4">
              <NavLink to="/contact"
                activeClassName="active" className="nav-link">Contact</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

const SearchBar = styled.form`
  @media only screen and (min-width: 992px) {
    display: none;
  }
`
