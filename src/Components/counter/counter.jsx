import { Component } from "react";
import "./counter.css";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    this.increment = this.increment.bind(this);
  }
  render() {
    return (
      <div className="counter">
        <button onClick={this.increment}>+1</button>
        <span className="counter-span">{this.state.counter}</span>
      </div>
    );
  }
  increment() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }
}

export default Counter;
