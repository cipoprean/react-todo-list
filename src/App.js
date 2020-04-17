import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ToDoInput from "./components/ToDoInput";
import ToDoList from "./components/ToDoList";
import * as uuid from "uuid/v4";

class App extends Component {
  state = {
    items: [
      { id: 1, title: "wake up" },
      { id: 2, title: "make breakfast" },
    ],
    id: uuid(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log(e);
  };

  handleSubmit = (e) => {};

  handleClearList = () => {};

  handleEdit = (id) => {};

  handleDelete = (id) => {};

  render() {
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-10.mx-auto.col-md-8.m-5">
            <h3 className="text-capitalize text-center"></h3>
            <ToDoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <ToDoList
              items={this.state.items}
              handleClearList={this.handleClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
