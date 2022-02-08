import React, { useState } from "react";
import CounterFunctional from "./CounterFunctional";
import LoginForm from "./LoginForm";

function App() {
  const [number, setNumber] = useState(0);

  function handleIncrement() {
    setNumber((prevState) => prevState + 1);
  }

  const handleDecrement = () => {
    setNumber((prevState) => prevState - 1);
  };

  return (
    <div className="App">
      <CounterFunctional
        angka={number}
        increment={handleIncrement}
        decrement={handleDecrement}
      />
      <LoginForm />
    </div>
  );
}

export default App;
