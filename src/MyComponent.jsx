import { Component } from "react/cjs/react.production.min";
import CounterClass from "./CounterClass";

class MyComponent extends Component {
  state = {
    number: 0,
  };

  // static getDerivedStateFromProps(props, state) {
  //   console.log("getDerivedStateFromProps");
  //   return null;
  // }

  // componentDidMount() {
  //   console.log("componentDidMount");
  //   setTimeout(() => {
  //     this.setState({ number: 1 });
  //   });
  // }

  // shouldComponentUpdate() {
  //   if (this.state.number < 4) {
  //     return false;
  //   }
  //   return true;
  // }

  // componentWillUnmount() {
  //   console.log("componentWillUnmount");
  // }

  // componentDidUpdate() {
  //   console.log("componentDidUpdate");
  // }

  handleIncrement = () => {
    this.setState({ number: this.state.number + 1 });
  };

  handleDecrement = () => {
    this.setState({ number: this.state.number - 1 });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <button onClick={this.handleDecrement}>-</button>
        <CounterClass angka={this.state.number} />
        <button onClick={this.handleIncrement}>+</button>
      </div>
    );
  }
}

export default MyComponent;
