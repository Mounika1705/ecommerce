import React, { Component } from 'react';
import Filter from './Filter/filter';
import styled from 'styled-components';
import ProductList from './ProductList/productList';
import { ProductContext } from '../../context/context';


export default () => {
  const products = React.useContext(ProductContext);
    return (
      <div className="container">
        <Div className="row py-5">
          <div className="col-lg-3 col-md-12">
            <Filter/>
          </div>
          <div className="col-lg-9 col-md-12">
            <ProductList products={products}/>
          </div>
        </Div>
      </div>
    )
}

const Div = styled.div`
  .filters {
    font-family:  'Glegoo', serif;
    h3 {
      text-transform: capitalize;
    }
    ul {
      list-style-type: square;
      border: 1px solid var(--darkviolet);
      margin: 2rem;
      padding: 1rem;
      a {
        font-size: 1rem;
        text-decoration: none;
        color: var(--mainred);
        &:hover,&:focus,&:active {
          color: var(--lightpink);
        }
      }
    }
  }
  .product-container {
    padding: 1rem;
    h5 {
      font-family:  'Glegoo', serif;
      text-transform: capitalize;
    }
    .filter {
      justify-content: space-between;
    }
    .card {
      margin: 1rem;
    }
  }
`