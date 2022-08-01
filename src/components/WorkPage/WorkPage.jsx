import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "../../css_style_GlobalandOther/Themes";

import LogoComponent from "../../subComponents/LogoComponent";
import PowerButton from "../../subComponents/PowerButton";
import SocialIcons from "../../subComponents/SocialIcons";

import { Work } from "../../data/WorkData";
import CardWork from "../../subComponents/CardWork";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;

const WorkPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton theme="dark" />
        <Main>
          {Work.map((el) => {
            return <CardWork  key={el.id} data={el}/>;
          })}
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
