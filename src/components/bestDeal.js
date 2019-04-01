import React, { Component } from 'react';


export default class BestDeal extends Component {
  bestDiscount = (products) => {
    for(const key in products) {
        console.log(key);
    }
  }
  render() {
    return (
      <div className="row">
        
      </div>
    )
  }
}
