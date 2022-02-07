import "./App.css";
import { Component } from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

function getText() {
  return "Send";
}

class MyComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
    console.log("Constructor");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("componentDidMount");
    setTimeout(() => {
      this.setState({ number: 1 });
    });
  }

  shouldComponentUpdate() {
    if (this.state.number < 4) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleIncrement = () => {
    this.setState({ number: this.state.number + 1 });
  };

  render() {
    console.log("render");
    return (
      <div>
        <label htmlFor="name">Enter Name: </label>
        <input type="text" name="name" id="name" />
        <button className="submit-btn" onClick={this.handleIncrement}>
          {this.state.number}
        </button>
      </div>
    );
  }
}

export default MyComponent;
