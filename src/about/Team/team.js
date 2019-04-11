import React, { Component } from 'react';
import { persons } from '../../data/persons';
import Card from './Card/card';
import styled from 'styled-components';


export default class Team extends Component {
  render() {
    return (
      <div className="row pt-5" >
        { persons.map(person => {
            return (
              <Div key={person.id} className="col-lg-3 col-md-6 col-sm-12">
                <Card person={person}/>
              </Div>
            );
          }
        )}
      </div>
    )
  }
}

const Div = styled.div`
  padding: 1rem;
  color: var(--mainred);
  .card {
    border: none;
    background: transparent;
    img {
      border-radius: 50%;
      height: 150px;
      width: 150px;
      padding: 0.2rem;
      border: 1px solid var(--mainred); 
      align-self: center;
      background: #fff;
    }
    span {
      display: block;
      .fa {
        padding: 1rem;
        background: #000;
        color: #fff;
        margin: 0.2rem;
      }
    }
  }
`
