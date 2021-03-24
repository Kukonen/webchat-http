import React from "react";
import './App.css';
import {BrowserRouter} from "react-router-dom";

import Menu from "../Menu/Menu";
import Content from "../Content/Content";

function App() {
  return (
    <div className="main">
        <BrowserRouter>
            <Menu/>
            <Content/>
        </BrowserRouter>
    </div>
  );
}

export default App;
