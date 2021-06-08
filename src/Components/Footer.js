import React from 'react'
import styled from 'styled-components'
const Footer = () => {
  return (
    <Container>
      <h5>
        &copy; {new Date().getFullYear()}
        <span> Resort Beach </span>
      </h5>
      <h5>All rights reserved</h5>
    </Container>
  )
}

const Container = styled.footer`
  height: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #333;
  text-align: center;
  span {
    color: #ab7a5f;
  }
  h5 {
    color: #fff;
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`
export default Footer
