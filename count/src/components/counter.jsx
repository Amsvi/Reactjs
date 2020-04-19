import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.counter.value,
  };
  // recieve argument to this function
  handleIncrement = () => {
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
        {/* in this case we could use props simply as I changed 
        the code we get same result children is use for times
         there are complex element to a child component such as 
         dialog bux in those case we use children */}
        <h4>Counter # {this.props.id}</h4>
        <button className={this.buttomRnd()}>{this.state.value}</button>
        <button
          onClick={this.handleIncrement}
          className="btn m-2 badge-primary"
        >
          increment
        </button>
        <button
          //here counter componenet is raising an event
          // its parent (counterS) component is handling that event
          onClick={() => this.props.onDeleteEvent(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Counter;
