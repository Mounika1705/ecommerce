import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import styled from 'styled-components';


export default class Product extends Component {
  discountPrice = (price, discount) => {
    return (price - price * discount * 0.01).toFixed(2);
  }
  render() {
    const { model, image, price, cart, discount } = this.props.product;
    return (
      <Div className="card" >
        <img className="card-img-top" src={image} alt={model} />
        {discount ? <div className="top-left">Sale
        <span>{discount} % </span></div> : null}
        <div className="card-body">
          <h5 className="card-title">{model}</h5>
          <p className="card-text">
            {discount ? <React.Fragment>
              <span>${price}</span>
              ${this.discountPrice(price, discount)}
            </React.Fragment> : `$${price}`
            }
          </p>
          <button className="btn  ">{cart ? "InCart" : "Add To Cart"}</button>
        </div>
      </Div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    model: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
    cart: PropTypes.bool,
    discount: PropTypes.number
  }).isRequired
};

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
  .card-body{
    text-align: center;  
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
  }
  button {
    border: 1px solid #c1c1c1;
    &:hover, &:focus {
      background: var(--mainred);
      color: white;
    }
  }
`
