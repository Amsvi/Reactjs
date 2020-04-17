import React, { Component } from "react";

class test1 extends Component {
  state = {
    count: 0,
    args: ["1", "2", "3"],
  };

  pushtoArg = () => {
    this.setState((prevState) => {
      const { args } = prevState;
      return {
        args: [...args, "new item"],
      };
    });
  };
  makeArgziro = () => {
    return this.setState({ args: this.state.args.splice(0, 0) });
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
  renderArgs = () => {
    return this.state.args.map((arg) => (
      <li key={arg} className="list-group-item m-2">
        {arg}
      </li>
    ));
  };

  argDecreemnt = () => {
    return this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <React.Fragment>
        <p>
          {this.state.args.length === 0 && (
            <p className="alert alert-danger" role="alert">
              There is no args to show
            </p>
          )}
        </p>
        <ul>{this.renderArgs()}</ul>

        <button
          onClick={() => this.handleIncrement({ id: 1 })}
          className="btn m-2 badge-primary"
        >
          increment
        </button>
        <button className={this.buttomRnd()}>{this.state.count}</button>
        <button onClick={this.argDecreemnt} className="btn badge-danger">
          decriment
        </button>
        <button onClick={this.makeArgziro} className="btn m-2 badge-info">
          delete item of array
        </button>
        <button onClick={this.pushtoArg} className="btn badge-dark">
          push to arg{" "}
        </button>
      </React.Fragment>
    );
  }
}

export default test1;
