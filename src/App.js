import React from "react";

import createStore from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import NowWhat from "./components/NowWhat";

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
      <Wrapper>
        <Header />
        <aside>
          <nav>
            <ul>
              <li>
                <a href="#">Dashboard</a>
              </li>
              <li>
                <a href="#">Map</a>
              </li>
              <li>
                <a href="#">Charts</a>
              </li>
            </ul>
          </nav>
        </aside>
        <main>
          <NowWhat />
        </main>
        <ToastContainer />
      </Wrapper>
    </Provider>
  </MuiThemeProvider>
);

export default App;
