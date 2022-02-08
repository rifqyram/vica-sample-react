import React, { useState } from "react";
import axios from "axios";
import "./LoginForm.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null);

  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // axios
    //   .post(
    //     "https://dev.enigmacamp.com/trainings/api/auth/login",
    //     {
    //       username: email,
    //       password: password,
    //     },
    //     {
    //       headers: {
    //         "Content-Type": "application/json",
    //         "Access-Control-Allow-Origin": "*",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response);
    //   });

    const data = JSON.stringify({
      username: email,
      password: password,
    });

    fetch("https://dev.enigmacamp.com/trainings/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      mode: "no-cors",
      body: data,
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div>
      <h1>Login Form</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email :</label>
        <input
          onChange={handleChangeEmail}
          type="text"
          name="email"
          id="email"
        />
        <label htmlFor="password">Password :</label>
        <input
          onChange={handleChangePassword}
          type="text"
          name="password"
          id="password"
        />
        <button type="submit">Login</button>
      </form>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
}

export default LoginForm;
