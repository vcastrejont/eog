import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import createStore from "./store";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import Dashboard from "./components/Dashboard";
import Maps from "./components/Maps";
import Charts from "./components/Charts";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

const store = createStore();

const App = props => (
  <Provider store={store}>
    <Router>
      <Wrapper>
        <Header />
        <Sidebar />
        <Main>
          <Route path="/" exact component={Dashboard} />
          <Route path="/map/" component={Maps} />
          <Route path="/chart/" component={Charts} />
        </Main>
        <ToastContainer />
      </Wrapper>
    </Router>
  </Provider>
);

export default App;
