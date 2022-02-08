import React, { useEffect, useState } from "react";
import "./App.css";

function CounterFunctional(props) {
  // Object destructuring
  const { angka, increment, decrement } = props;
  const [show, setShow] = useState(true);
  //lifecycle hooks useEffect side effects, gunanya contohnya untuk mengambil data dari API
  //   useEffect(() => {
  //     console.log("useEffect dipanggil");
  //   }, []);

  //   useEffect(() => {
  //     console.log("useEffect dipanggil");
  //   }, [angka]);

  useEffect(() => {
    return () => {
      console.log("component will unmount");
    };
  }, [show]);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="counter">
      <button onClick={decrement} className="increment-btn">
        -
      </button>
      <p>Angka {angka}</p>
      <button onClick={increment} className="decrement-btn">
        +
      </button>
      <div>
        <button onClick={handleShow}>Hide dan show</button>
        {show && <p>Show</p>}
      </div>
    </div>
  );
}

export default CounterFunctional;
