import React, { Component } from 'react';
import Tab from './tab';
import styled from 'styled-components';
import BestDeal from './bestDeal';


export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      tabs : [ {id: 1, type: 'mobiles', active: true},
       {id: 2, type: 'tablets', active: false},
       {id: 3, type: 'laptops', active: false},
       {id: 4, type: 'wearables', active: false},
       {id: 5, type: 'printers', active: false}]
    }
  }

  imageStyle = {
    width: '100%',
    height: '400px'
  }
 
  handleOnClick = (value) => {
    const newTabs = [];
    this.state.tabs.forEach(obj => {
      const newObj = {...obj};
      if(obj.type === value) {
        newObj.active = true;
      } else {
        newObj.active = false;
      }
      newTabs.push(newObj);
    });
    this.setState({
      tabs : [...newTabs]
    });
    console.log(this.state.tabs);
  }
  render() {
    return (
      <React.Fragment>
      <div className="container-fluid p-0">
        <img style={this.imageStyle} src="img/home.jpg" alt="home page"/>
      </div>
      <div className="container">
        <div className="row">
            <div className="col-lg-5 col-md-12 col-sm-12 mt-5">
              <img style={this.imageStyle} src="img/SampleVideo.jpg" alt="sample video"/>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12 mt-5">
              <Tabs className="nav nav-pills" > 
                { 
                  this.state.tabs.map(obj => {
                  return (
                    <li className="nav-item" key={obj.id}>
                      <Button className={`nav-link ${obj.active ? 'active': ''}`} 
                        onClick={this.handleOnClick.bind(this, obj.type)}
                        data-toggle="pill">{obj.type}</Button>
                    </li>
                  );
                })}
              </Tabs>
              <div className="tab-content">
                {this.state.tabs.map(obj => {
                  return (
                    <div key={obj.id} className={`tab-pane container ${obj.active ? 'active':'fade'}`}>
                     { obj.active ? <Tab>{obj.type}</Tab> : null }
                    </div>
                  );
                })}
              </div>
            </div>
        </div>
      </div>
      <div className="container-fluid">
        <BestDeal/>
      </div>
      </React.Fragment>
    );
  }
}

const Button = styled.button`
  width: 100%;
  color: black;
  border: none;
  background: transparent;
  text-transform: uppercase;
  font-family:  'Glegoo', serif;
  &:hover, &:focus, &:active {
    color: var(--lightpink);
  }
  &.active {
    background: var(--mainred) !important;
    border-radius: 0;
    color: white;
  }
`

const Tabs = styled.ul`
   display: flex;
   flex-direction: row;
   border-bottom: 1px solid var(--mainred);
   @media only screen and (max-width: 600px) {
     flex-direction: column;
   }
`