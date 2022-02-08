import React, { Component } from "react";

class CounterClass extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <p>{this.props.angka}</p>
      </div>
    );
  }
}

export default CounterClass;
