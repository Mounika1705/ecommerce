import React from 'react';

export default (props) => {
  const {image, name, designation, facebook, twitter, google, instagram} = props.person;
  return (
    <div className="card">
      <img className="card-img-top" src={image} alt={name} />
      <div className="card-body">
          <h5 className="card-title text-center text-capitalize">{name}
            <span>{designation}</span>
          </h5>
          <p className="card-text">
            <span>
              <a href={facebook}><i className="fa fa-facebook" /></a>
              <a href={twitter}><i className="fa fa-twitter" /></a>
              <a href={google}><i className="fa fa-google-plus" /></a>
              <a href={instagram}><i className="fa fa-instagram" /></a>
            </span>
          </p>
      </div>
    </div>
  );
}