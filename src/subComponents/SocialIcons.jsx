import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, Twitter, YouTube } from "../components/AllSVGs";
import { darkTheme } from "../css_style_GlobalandOther/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
`;

const Line = styled.span`
  width: 2px;
  height: 8rem;
  background-color: ${props => props.click ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/RamK-16" }}
        >
          <Github
            width={25}
            height={25}
            fill={props.click ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://t.me/RamilPage" }}
        >
          <Twitter
            width={25}
            height={25}
            fill={props.click ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/RamK-16" }}
        >
          <Facebook
            width={25}
            height={25}
            fill={props.click ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <div>
        <NavLink
          style={{ color: "inherit" }}
          target="_blank"
          to={{ pathname: "https://github.com/RamK-16" }}
        >
          <YouTube
            width={25}
            height={25}
            fill={props.click ? darkTheme.text : darkTheme.body}
          />
        </NavLink>
      </div>
      <Line click={props.click}/>
    </Icons>
  );
};

export default SocialIcons;
