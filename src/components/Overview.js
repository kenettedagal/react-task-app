import React from "react";

export class Overview extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    return (
      <div>
        <h2>Latest task: {this.props.task[this.props.task.length - 1]}</h2>
        <ul>
          {this.props.task.map((item, i) => (
            <li key={i}>
              Task number {i}: {item}
              <button>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
