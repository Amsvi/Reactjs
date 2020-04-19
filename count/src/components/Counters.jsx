import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 0, value: 2 },
      { id: 1, value: 9 },
      { id: 2, value: 1 },
      { id: 3, value: 6 },
    ],
  };
  //we dont update the state directly, we should make a array without given deleteID
  //and then call setstate of component and let the react update the state
  handleDeleteEvent = (deleteID) => {
    const conters1 = this.state.counters.filter((m) => m.id !== deleteID);
    this.setState({ counters: conters1 });
  };
  render() {
    return (
      <div>
        {this.state.counters.map((counter) => (
          <Counter
            onDeleteEvent={this.handleDeleteEvent}
            key={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
