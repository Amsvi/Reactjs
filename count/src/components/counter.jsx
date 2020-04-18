import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
  };
  // recieve argument to this function
  handleIncrement = (product) => {
    console.log(product);
    this.setState({ count: this.state.count + 1 });
  };
  buttomRnd() {
    let butooo = "btn m-2 badge-";
    butooo += this.state.count <= 0 ? "warning" : "success";
    return butooo;
  }
  render() {
    return (
      <div>
        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn m-2 badge-primary"
        >
          increment
        </button>
        <button className={this.buttomRnd()}>{this.state.count}</button>
      </div>
    );
  }
}

export default Counter;
