import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Title extends Component {
  render() {
    return (
      <div className="col-8 text-left">
        <TitleContainer>
          <h1 className="m-0">
            <Link to="/" className="title">
              The Store
              <span>Best Choice</span>
            </Link>
          </h1>
        </TitleContainer>
      </div>
    )
  }
}

const TitleContainer = styled.div`
  font-family:  'Glegoo', serif;
  text-transform: uppercase;
  color: var(--darkviolet);
  a {
    color: var(--darkviolet);
    text-decoration: none;
    span {
      text-transform: capitalize;
      letter-spacing: 0.5rem;
      margin-top: -0.5rem
      color: var(--darkviolet);
      display: block;
      font-size: 1.2rem;
    }
    @media (max-width: 414px) {
        font-size: 2rem;
    }
  }
  `
