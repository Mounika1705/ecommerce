import React, { Component } from 'react';
import { Heading } from '../styled/heading';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IconHolder } from '../styled/iconHolder';


export default class Footer extends Component {
  render() {
    return (
      <footer className="container">
        <div className="row d-flex pt-5">
          <div className="col-lg-3 col-md-6 col-sm-12 pr-4 mb-3 pb-5">
            <Heading>Contact</Heading>
            <p> This book is a treatise on the theory of ethics,
              very popular during the Renaissance.
            </p>
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
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pr-4 mb-3 pb-5">
            <Heading>Information</Heading>
            <List>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">About Us</Link>
              </li>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">Contact Us</Link>
              </li>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">Short Codes</Link>
              </li>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">FAQ's</Link>
              </li>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">Special Products</Link>
              </li>
            </List>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 pr-4 mb-3 pb-5">
            <Heading>Category</Heading>
            <List>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">Mobiles</Link>
              </li>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">Tablets</Link>
              </li>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">Laptops</Link>
              </li>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">Wearables</Link>
              </li>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">Printers</Link>
              </li>
            </List>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 mb-3 prb-5">
            <Heading>Profile</Heading>
            <List>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">Home</Link>
              </li>
              <li>
                <i className="fa fa-arrow-right" />
                <Link to="/">Today's Deals</Link>
              </li>
            </List>
            <SocialIcons>
              <h4>Follow Us</h4>
              <span>
                <a href="/"><i className="fa fa-facebook" /></a>
                <a href="/"><i className="fa fa-twitter" /></a>
                <a href="/"><i className="fa fa-google-plus" /></a>
                <a href="/"><i className="fa fa-instagram" /></a>
              </span>
            </SocialIcons>
          </div>
        </div>
      </footer>
    )
  }
}

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
  li {
    padding-bottom: 1rem;
  }
  .fa-arrow-right {
    font-size: 0.8rem;
    padding-right: 1rem;
  }
  a {
    color: var(--darkviolet);
    text-decoration: none;
    &:hover {
      color: var(--lightviolet);
    }
  }
`

const SocialIcons = styled.div`
  h4 {
    font-family:  'Glegoo', serif;
  }
  .fa {
    border-radius: 50%;
    color: white;
    padding: 0.5rem;
    margin: 0.3rem;
  }
  .fa-facebook {
    background: var(--facebook);
    &:hover, &:focus, &:active {
        background: white;
        border-color: var(--facebook);
        color: var(--facebook);
    }
  }
  .fa-google-plus {
    background: var(--google-plus);
    &:hover, &:focus, &:active {
        background: white;
        border-color: var(--google-plus);
        color: var(--google-plus);
    }
  }
  .fa-instagram {
    background: var(--instagram);
    &:hover, &:focus, &:active {
        background: white;
        border-color: var(--instagram);
        color: var(--instagram);
    }
  }
  .fa-twitter {
    background: var(--twitter);
    &:hover, &:focus, &:active {
        background: white;
        border-color: var(--twitter);
        color: var(--twitter);
    }
  }
` 
