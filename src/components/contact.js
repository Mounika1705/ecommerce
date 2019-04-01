import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  imageStyle = {
    width: '100%',
    height: '350px'
  }
  render() {
    return (
      <div>
        <React.Fragment>
      <div className="container-fluid p-0">
        <img style={this.imageStyle} src="img/contact.jpg" alt="contact page"/>
        <div className="bg-light text-center">
          <Link to="/">
            <i className="fa fa-home"/> Home
          </Link>&nbsp; / &nbsp;
           Contact Us
        </div>
      </div>
      
      </React.Fragment>
      </div>
    )
  }
}
