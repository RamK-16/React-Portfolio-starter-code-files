import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./css_style_GlobalandOther/Themes";
import GlobalStyle from "./css_style_GlobalandOther/globalStyles";

//Components
import AboutPage from "./components/AboutPage/AboutPage";
import BlogPage from "./components/BlogPage/BlogPage";
import Main from "./components/Main/Main";
import MySkillsPage from "./components/MySkillsPage/MySkillsPage";
import WorkPage from "./components/WorkPage/WorkPage";


function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={lightTheme}>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/skills" component={MySkillsPage} />
          <Route exact path="/work" component={WorkPage} />
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
