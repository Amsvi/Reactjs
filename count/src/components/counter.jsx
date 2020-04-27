import React, { Component } from "react";

class Counter extends Component {
  // by removing state it becomes controlled component
  // it recieves all the data via props and raises event when ever data need to be changed.
  render() {
    return (
      <div className="row">
        <div className="col-1">
          <span className={this.buttomRnd()}>{this.formatCount()}</span>
        </div>
        <div className="cok">
          <button
            onClick={() => this.props.onIncrement(this.props.counter)}
            className="btn btn-primary"
          >
            +
          </button>
          <button
            onClick={() => this.props.onDecrement(this.props.counter)}
            className="btn btn-secondary m-2"
            disabled={this.props.counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            //here counter componenet is raising an event
            // its parent (counterS) component is handling that event
            onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger "
          >
            X
          </button>
        </div>
      </div>
    );
  }
  buttomRnd() {
    let butooo = "badge badge-";
    butooo += this.props.counter.value === 0 ? "warning" : "success";
    return butooo;
  }
  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
