import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category/category';
import styled from 'styled-components';


export default class Products extends Component {
  imageStyle = {
    width: '100%',
    height: '350px'
  }
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid p-0">
          <img style={this.imageStyle} src="img/products.jpg" alt="products page" />
          <div className="bg-light text-center">
            <Link to="/">
              <i className="fa fa-home" /> Home
          </Link>&nbsp; / &nbsp;
             Products
        </div>
        </div>
        <Category />
        <div className="container-fluid bg-danger">
          <div className="container">
            <Div className="row py-5">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <h3>Get updates on Offers</h3>
                <p>To get offer updates on to your mail</p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <form className="form-inline my-2">
                  <input className="form-control" type="text"
                    placeholder="example@address.com" aria-label="Mail"></input>
                  <button type="submit">Send</button>
                </form>
              </div>
            </Div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const Div = styled.div`
  h3 {
    font-family:  'Glegoo', serif;
    text-transform: capitalize;
    color: #fff;
  }
  p {
    color: #fff;
  }
  button {
    font-size: 1.5rem;
    color: #fff;
    background: var(--darkviolet);
    border: none;
  }
`