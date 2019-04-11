import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IconHolder } from '../styled/iconHolder';


export default class Contact extends Component {
  imageStyle = {
    width: '100%',
    height: '350px'
  }
  render() {
    return (
      <Div className="contact-container">
        <div className="container-fluid p-0">
          <img style={this.imageStyle} src="img/contact.jpg" alt="contact page" />
          <div className="bg-light text-center">
            <Link to="/">
              <i className="fa fa-home" /> Home
          </Link>&nbsp; / &nbsp;
                Contact Us
        </div>
        </div>
        <div className="container">
          <div className="row pt-5">
            <div className="col-12 text-center">
              <h3>Mail Us</h3>
            </div>
          </div>
          <div className="row py-3">
            <div className="col-lg-4 col-md-12 col-sm-12">
              <h5>Address</h5>
              <IconHolder>
                <i className="fa fa-map-marker"></i>
                445 Mount Eden Road,
              <span>Mount Eden, Auckland.</span>
              </IconHolder>
              <IconHolder>
                <i className="fa fa-envelope"></i>
                info@example.com
              </IconHolder>
              <IconHolder>
                <i className="fa fa-phone"></i>
                +64 022 343 4542
              </IconHolder>
              <IconHolder>
                <i className="fa fa-fax"></i>
                +64 078 4589 2456
              </IconHolder>
            </div>
            <div className="col-lg-8 col-md-12 col-sm-12 text-center">
              <h5>Contact Form</h5>
              <form className="form-inline p-2" action="">
                <input type="text" className="form-control m-3" id="name" placeholder="Your Name" />
                <input type="email" className="form-control m-3" id="email" placeholder="Your Email" />
                <input type="text" className="form-control m-3" id="phone" placeholder="Telephone No." />
                <textarea className="form-control m-3" rows="5" cols="90" id="comment" placeholder="Message..." />
                <button type="submit" className="btn btn-primary m-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
        <div className="container">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3191.3403368352697!2d174.75979531502807!3d-36.88220568908412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d4632b3e7d2c3%3A0xcccf9d03ee62e7f!2s445+Mount+Eden+Rd%2C+Mount+Eden%2C+Auckland+1024!5e0!3m2!1sen!2snz!4v1554964275019!5m2!1sen!2snz"
          frameBorder="0" style={{border:0}} allowFullScreen></iframe>
        </div>
      </Div>
        )
      }
    }
    
const Div = styled.div`
  h3, h5 {
    font-family: 'Glegoo', serif;
    text-transform: capitalize;
    color: var(--mainred);
  }
  iframe {
    width: 100%;
    height: 300px;
  }
`