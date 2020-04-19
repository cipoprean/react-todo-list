import React, { Component } from "react";
import Item from "./ToDoItem";
import ToDoItem from "./ToDoItem";

export default class ToDoList extends Component {
  render() {
    const { items, clearList, handleDelete, handleEdit } = this.props;
    return (
      <ul className="list-group my-5">
        <h4 className="text-capitalize text-center">Todo List</h4>
        {items.map((item) => {
          return (
            <ToDoItem
              key={item.id}
              title={item.title}
              handleDelete={() => handleDelete(item.id)}
              handleEdit={() => handleEdit(item.id)}
            ></ToDoItem>
          );
        })}
        <button
          type="button"
          className="btn btn-danger 
          btn-block text-uppercase mt-5"
          onClick={clearList}
        >
          Clear List
        </button>
      </ul>
    );
  }
}
