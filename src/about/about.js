import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class About extends Component {
  imageStyle = {
    width: '100%',
    height: '350px'
  }
  render() {
    return (
      <div className="container-fluid p-0">
        <img style={this.imageStyle} src="img/about.jpg" alt="about page" />
        <div className="bg-light text-center">
          <Link to="/">
            <i className="fa fa-home" /> Home
          </Link>&nbsp; / &nbsp;
          About Us
        </div>
      </div>
    )
  }
}
