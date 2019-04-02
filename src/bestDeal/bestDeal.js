import React from 'react';
import { ProductContext } from '../context/context';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Timer from './timer/timer';


export default () => {
  const products = React.useContext(ProductContext);
  const imageStyle = {
    width: "100%",
    height: "400px",
    padding: "0"
  }
  const bestDiscount = (products) => {
    let discount = 0;
    let tempProduct = {};
    for (const key in products) {
      products[key].forEach(product => {
        if (product.discount > discount) {
          discount = product.discount;
          tempProduct = product;
        }
      });
    }
    return tempProduct;
  }
  const bestProduct = bestDiscount(products);
  return (
    <div className="row mt-4">
      <div className="col-lg-7 col-md-12 col-sm-12 p-0">
        <Span>{bestProduct.discount}% Discount</Span>
        <img style={imageStyle} src="img/bestdeal.jpg" alt="Best Deal"></img>
        <Div><Link to="/">Shop Now -></Link></Div>
      </div>
      <div className="col-lg-5 col-md-12 col-sm-12 p-0">
        <TimerContainer>
          <button>Hot Deal</button>
          <img style={imageStyle} src="img/bestdeal1.jpg" alt="Best Deal" />
          <Timer>{bestProduct.end}</Timer>
        </TimerContainer>
      </div>
    </div>
  )
}

const Span = styled.span`
  position: absolute;
  top: 20%;
  right: 10%;
  color: white;
  font-size: 2rem;
  font-weight: 600;
  font-family:  'Glegoo', serif;
  text-transform: capitalize;
`

const Div = styled.div`
  position: absolute;
  bottom: 20%;
  right: 15%;
  color: var(--mainred);
  font-family:  'Glegoo', serif;
  text-transform: uppercase;
  a {
    text-decoration: none;
  }
`

const TimerContainer = styled.div`
  button {
    position: absolute;
    top: 20%;
    left: 40%;
    background: black;
    color: #fff;
    border: 1px solid white;
    text-transform: uppercase;
  }
  .timer {
    position: absolute;
    width: 80%;
    height: 20%;
    bottom: 10%;
    left: 10%;
    display: flex;
    div {
      width: 80px;
      height: 80px;
      padding: 0.8rem 0.5rem;
      margin: 0 auto;
      border-radius: 50%;
      background: var(--lightpink);
      color: #fff;
      text-align: center;
      span {
        display: block;
      }
    }
  }
`
