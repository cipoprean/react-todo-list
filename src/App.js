import React, { Component } from "react";
import logo from "./logo.svg";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <ToDoList />
            <ToDoInput />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
