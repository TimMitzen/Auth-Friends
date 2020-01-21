import React, { useState } from "react";

import axios from "axios";

const Login = props => {
  const [user, setUser] = useState({
    username: "",
    password: ""
  });

  const login = event => {
    event.preventDefault();

    console.log("user", user);
    axios
      .post("http://localhost:5000/api/login", user)
      .then(response => {
        localStorage.setItem("token", response.data.payload);
        props.history.push("/protected");
      })
      .catch(error => console.log(error));
  };

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={login}>
      <input
        name="username"
        type="text"
        value={user.username}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={user.password}
        onChange={handleChange}
      />
      <button>Login</button>
    </form>
  );
};

export default Login;
