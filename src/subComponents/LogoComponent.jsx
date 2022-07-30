import React from 'react'
import styled from 'styled-components'
import { darkTheme } from '../css_style_GlobalandOther/Themes'

const Logo = styled.h1`

display: inline-block;
color: ${props => props.click ? darkTheme.text : darkTheme.body};
font-family: 'Pacifico', cursive;

position: fixed;
left: 2rem;
top: 2rem;
z-index: 3;
`

const LogoComponent = (props) => {
  return (
    <Logo click={props.click}>
      {`RK`}
    </Logo>
  )
}

export default LogoComponent
