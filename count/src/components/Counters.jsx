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
          <Counter key={counter.id} value={counter.value}>
            {/* value attribute, that we set above, are passed to counter
            Component using js object called "props", there is special prop called
            "CHILDREN"and we use it when we pass something between OPENING AND
            CLOSING TAG of an element*/}
            <h4>Counter #{counter.id}</h4>
          </Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
