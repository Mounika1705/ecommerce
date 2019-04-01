import React, { Component } from 'react';
import { PropTypes } from 'prop-types';


export default class Product extends Component {
  discountPrice = (price, discount) => {
    return (price - price * discount * 0.01).toFixed(2);
  }
  render() {
    const {model, image, price, cart, discount} = this.props.product;
    console.log(this.props.product);
    return ( 
      <div className="card" >
        <img className="card-img-top" src={image} alt={model}/>
        { discount ? <div className="top-left">Sale
        <span>{discount } % </span></div> : null}
        <div className="card-body">
          <h5 className="card-title">{model}</h5>
          <p className="card-text">
            { discount ? <React.Fragment>
              <span>${price}</span>
              ${this.discountPrice(price, discount)}
              </React.Fragment>: `$${price}`
            }
            
          </p>
          <button className="btn  ">{cart? "InCart" : "Add To Cart"}</button>
        </div>
      </div>);   
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