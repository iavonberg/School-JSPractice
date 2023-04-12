import React from "react";
import ReactDOM from "react-dom";
import { legacy_createStore } from "redux";
import reducer from "./reducers/reducer.js";
import addTableItem from "./actions/addTableItem.js";
import deleteTableItem from "./actions/deleteTableItem.js";
import incrementMoneyEarned from "./actions/incrementMoneyEarned.js";
import selectTable from "./actions/selectTable.js";
import toggleTable from "./actions/toggleTable.js";

var store = legacy_createStore(reducer);

function App() {
  return (
    <div className="App">
      <h1>Hello Sandbox!</h1>
      <h2>Start editing to see some magic happen</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)
