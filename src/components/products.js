import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Products extends Component {
  imageStyle = {
    width: '100%',
    height: '350px'
  }
  render() {
    return (
      <React.Fragment>
      <div className="container-fluid p-0">
        <img style={this.imageStyle} src="img/products.jpg" alt="products page"/>
        <div className="bg-light text-center">
          <Link to="/">
            <i className="fa fa-home"/> Home
          </Link>&nbsp; / &nbsp;
           Products
        </div>
      </div>
      
      </React.Fragment>
    )
  }
}
