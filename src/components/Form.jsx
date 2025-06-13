import React, { useState, useRef } from "react";

export default function Form() {
  const [name, setName] = useState("Aniket");
  const [email, setEmail] = useState("");

  const testRef = useRef(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    setName("");
    setEmail("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="name"
        ref={testRef}
        // value={name}
        onChange={() => setName(testRef.current.value)}
      />
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>Submit</button>
    </form>
  );
}
