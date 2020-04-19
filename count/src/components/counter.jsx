import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
  };
  // recieve argument to this function
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ value: this.state.value + 1 });
  };
  buttomRnd() {
    let butooo = "btn m-2 badge-";
    butooo += this.state.value === 0 ? "warning" : "success";
    return butooo;
  }
  render() {
    return (
      <div>
        <h4>Counter # {this.props.id}</h4>
        <button className={this.buttomRnd()}>{this.state.value}</button>
        <button
          onClick={() => this.handleIncrement()}
          className="btn m-2 badge-primary"
        >
          increment
        </button>
      </div>
    );
  }
}

export default Counter;
