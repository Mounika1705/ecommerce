import styled from 'styled-components';

export const Heading = styled.h3`
  font-family:  'Glegoo', serif;
  text-transform: uppercase;
  color: var(--simpleblack);
  padding-bottom: 2rem;
  &::after {
    content: "";
    display:block;
    padding-top: 0.5rem;
    border-bottom: 0.2rem solid var(--mainred);
    width: 25%;
  }
`