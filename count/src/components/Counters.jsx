import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    Counters: [
      { id: 0, value: 2 },
      { id: 1, value: 9 },
      { id: 2, value: 1 },
      { id: 3, value: 6 },
    ],
  };
  render() {
    return (
      <div>
        {this.state.Counters.map((counter) => (
          <Counter
            key={counter.id}
            value={counter.value}
            id={counter.id}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
