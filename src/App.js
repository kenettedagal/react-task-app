import "./App.css";
import React from "react";
import uniqid from "uniqid";
import { Overview } from "../src/components/Overview";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      show: "",
      task: [
        {
          title: "Do React Coding",
          id: uniqid(),
        },
        {
          title: "Do League",
          id: uniqid(),
        },
        {
          title: "Do something fun.",
          id: uniqid(),
        },
      ],
    };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
    console.log(this.state.value);
  };

  submit = () => {
    this.setState({
      show: this.state.value,
      task: [...this.state.task, { title: this.state.value, id: uniqid() }],
      value: "",
    });
    console.log(this.state.show);
  };

  deleteRow(id) {
    console.log(id);
    let filteredArray = this.state.task.filter((item) => item.id !== id);
    this.setState({ task: filteredArray });
  }

  render() {
    return (
      <div className="App">
        <div>Enter your tasks</div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button onClick={this.submit}>Submit Task</button>
        <hr />
        <ul>
          {this.state.task.map((item) => (
            <li key={item.id}>
              {item.title} Task id:{item.id}
              <button onClick={this.deleteRow.bind(this, item.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
        {/* <Overview task={this.state.task} /> */}
      </div>
    );
  }
}
