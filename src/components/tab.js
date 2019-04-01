import React from 'react';
import { ProductConsumer }  from '../context/context';
import Product from './product';
import styled from 'styled-components';

export default (props) => {
  return (
    <div className="row">
      <ProductConsumer>
        {
          (value) => {
            return value[props.children].map(product => {
              return (product.id < 4 ? 
                <Div className="col-lg-4 col-md-12 col-sm-12 p-0 text-center" key={product.id}>
                  <Product  product={product}/>
                </Div> : null);
            });
          } 
        }
      </ProductConsumer>
    </div>
  )
}

const Div = styled.div` 
  h5 {
    font-family:  'Glegoo', serif;
    color: var(--darkviolet);
    text-transform: capitalize;
  }
  .top-left {
    position: absolute;
    top: 5%;
    left: 30%;
    padding: 0.4rem 0.6rem;
    background: var(--google-plus);
    color: white;
    border-radius: 50%;
    border: 1px solid white;
    &:hover, &:focus, &:active {
      transform: scale(0.8, 0.8);
      -ms-transform: scale(0.8, 0.8);
      -wekit-transform: scale(0.8, 0.8);
    }
    span {
      display: block;
    }
  }
  img {
    width: 150px;
    height: 150px;
    margin: 2rem;
    align-self: center;
    &:hover, &:focus, &:active  {
      transform: scale(1.2, 1.2);
      -ms-transform: scale(1.2, 1.2);
      --webkit-transform: scale(1.2, 1.2);
    }
  }
  .card {
    border: none;
  }
  .card-text {
    span {
      font-size: 1rem;
      text-decoration: line-through;
      padding: .8rem;
      color: #999;
      font-weight: 400;
    }
    font-weight: 600;
    font-size: 1.2rem;
  }
  button {
    border: 1px solid #c1c1c1;
    &:hover, &:focus {
      background: var(--mainred);
      color: white;
    }
  }
`