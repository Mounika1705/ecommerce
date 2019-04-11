import React, { Component } from 'react';
import styled from 'styled-components';
import Team from './Team/team';


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
          <a href="/">
            <i className="fa fa-home" /> Home
          </a>&nbsp; / &nbsp;
          About Us
        </div>
        <div className="container py-5 text-gray">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
                odit aut fugit, sed quia consequuntur magni dolores eos qui 
                ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, 
                sed quia non numquam eius modi tempora incidunt ut labore et dolore
                magnam aliquam quaerat voluptatem.</p>
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <Lnk><i className="fa fa-question"></i></Lnk>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10">
                  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.</p>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-2 col-md-2 col-sm-2">
                  <Lnk><i className="fa fa-link"></i></Lnk>
                </div>
                <div className="col-lg-10 col-md-10 col-sm-10">
                  <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore
                    magnam aliquam quaerat voluptatem.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <img src="img/business-team.jpg" style={this.imageStyle} alt="business team"/>
            </div>
          </div>
        </div>
        <Div className="container-fluid">
          <div className="row pt-5">
            <div className="col-12 text-center">
             <h2 className="title-font text-info text-capitalize">Meet Our Team</h2>
            </div>
          </div>
          <div className="container"><Team/>
          <div className="row text-center pb-5">
            <p>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis 
              voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
          </div>
          </div>
        </Div>
      </div>
    )
  }
}

let Lnk = styled.div`
  color: var(--darkviolet);
  padding: 2rem 1rem;
  .fa {
    font-size: 3rem;
  }
`

let Div = styled.div`
  background: #f5f5f5;
`