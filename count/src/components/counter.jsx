import React, { Component } from "react";

class Counter extends Component {
  // by removing state it becomes controlled component
  // it recieves all the data via props and raises event when ever data need to be changed.
  // at this time this component is entirely controlled by its parent.
  render() {
    return (
      <div>
        <span className={this.buttomRnd()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn m-2 badge-primary"
        >
          increment
        </button>
        <button
          //here counter componenet is raising an event
          // its parent (counterS) component is handling that event
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
  buttomRnd() {
    let butooo = "badge m-2 badge-";
    butooo += this.props.counter.value === 0 ? "warning" : "success";
    return butooo;
  }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
