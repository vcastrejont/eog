import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createStore from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import NowWhat from "./components/NowWhat";
import Maps from "./components/Maps";
import Charts from "./components/Charts";
import Main from "./components/Main";

const store = createStore();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
  palette: {
    primary: {
      main: "#fff"
    },
    secondary: {
      main: "#587C92"
    },
    background: {
      main: "#F3F3F3"
    }
  }
});

const App = props => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <Provider store={store}>
      <Router>
        <Wrapper>
          <Header />
          <aside>
            <nav>
              <ul>
                <li>
                  <Link to="/">Dashboard</Link>
                </li>
                <li>
                  <Link to="/map/">Map </Link>
                </li>
                <li>
                  <Link to="/chart">Charts</Link>
                </li>
              </ul>
            </nav>
          </aside>
          <Main>
            <Route path="/" exact component={NowWhat} />
            <Route path="/map/" component={Maps} />
            <Route path="/chart/" component={Charts} />
          </Main>
          <ToastContainer />
        </Wrapper>
      </Router>
    </Provider>
  </MuiThemeProvider>
);

export default App;
