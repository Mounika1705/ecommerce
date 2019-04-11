 import React from 'react';
import styled from 'styled-components';


export const Copyright = () => {
  return (
    <div className="copyright">
      <PageTop>
        <div className="page-top">
          <a href="#top"><i className="fa fa-arrow-circle-up"/></a>
        </div>
      </PageTop>
      <div className="text-center my-4">
        @ 2019 Gadget Store. All rights reserved.
      </div>
    </div>
  );
};

const PageTop = styled.div`
  border-top: 1px solid var(--lightblack);
  .page-top {
    width: 3rem;
    position: absolute;
    right: 6%;
    .fa-arrow-circle-up {
      align: right;
      border-radius: 50%;
      color: white;
      padding: 0.8rem;
      margin: 0.3rem;
      background: var(--facebook);
      &:focus,
      &:hover {
        background: white;
        border-color: var(--facebook);
        color: var(--facebook);
      }
    }
  }
`
