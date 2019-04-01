import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

export default class Search extends Component {
  render() {
    return (
      <div className="col-4">
        <SearchContainer>
          <Link to="/profile"><i className="fa fa-user my-3"></i></Link>
          <Link to="/cart"><i className="fa fa-cart-plus my-3"></i></Link>
          <form className="form-inline my-2">
            <input className="form-control" type="search"
              placeholder="Search" aria-label="Search"></input>
            <i className="fa fa-search ml-n4"></i>
          </form>
        </SearchContainer>
      </div>
    )
  }
}

const SearchContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  color: var(--darkviolet);
  @media only screen and (min-width: 992px) {
    .form-inline {
      margin-right: 1.5rem;
    }
  }
  @media only screen and (max-width: 992px) {
    .form-inline {
      display: none;
    }
  }
  .fa-cart-plus {
    margin-right: 1.5rem;
  }
  .fa {
   color: var(--darkviolet);
   font-size: 2rem !important;
    &:hover {
      color: var(--lightviolet);
      transform: scale(1.2, 1.2);
      -ms-transform: scale(1.2, 1.2);
      -webkit-transform: scale(1.2, 1.2);
    }
  }
  .fa-search {
    font-size: 1.2rem !important;
  }
`
