import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("Aniket");
  const [email, setEmail] = useState("example@gmail.com");
  const [password, setPassword] = useState("1234");
  const [confirmPassword, setConfirmPassword] = useState("1234");

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your Name"
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="email"
        placeholder="Enter your Email"
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
      />
      <input
        type="password"
        placeholder="Enter your Password"
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
      />
      <input
        type="text"
        placeholder="Confirm your Password"
        value={confirmPassword}
        onChange={(event) => {
          setConfirmPassword(event.target.value);
        }}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
}
