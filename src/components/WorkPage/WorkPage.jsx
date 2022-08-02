import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "../../css_style_GlobalandOther/Themes";

import LogoComponent from "../../subComponents/LogoComponent";
import PowerButton from "../../subComponents/PowerButton";
import SocialIcons from "../../subComponents/SocialIcons";

import { Work } from "../../data/WorkData";
import CardWork from "../../subComponents/CardWork";
import { YinYang } from "../AllSVGs";
import BigTitle from "../../subComponents/BigTitle";
const Box = styled.div`
  background-color: ${(props) => props.theme.body};

  height: 400vh;
  position: relative;
  display: flex;
  align-items: center;
`;
const Main = styled.ul`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;

  color: white;
`;
const Rotate = styled.div`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

const WorkPage = () => {
  const ref = useRef(null);
  const yingYang = useRef(null);
  useEffect(() => {
    let element = ref.current;
    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
      if (yingYang.current) {
        return (yingYang.current.style.transform =
          `rotate(` + -window.pageYOffset + `deg)`);
      }
    };

    window.addEventListener("scroll", rotate);

    return () => window.removeEventListener("scroll", rotate);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PowerButton theme="dark" />
        <Main ref={ref}>
          {Work.map((el) => {
            return <CardWork key={el.id} data={el} />;
          })}
        </Main>
        <Rotate ref={yingYang}>
          <YinYang width={80} height={80} fill={darkTheme.text} />
        </Rotate>
        <BigTitle text="Work" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
