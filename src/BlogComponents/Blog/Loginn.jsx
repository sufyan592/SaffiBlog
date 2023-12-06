import React, { useState } from "react";
import Nav from "../../Components/Hero/Nav/Nav";
import "./blog.css";
import { useNavigate } from "react-router-dom";

const Loginn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const getData = JSON.parse(localStorage.getItem("userData"));
  const [data, setData] = useState(getData);
  const navigate = useNavigate();
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userFound = data.find(
      (user) => user.email === email && user.password === password
    );
    if (userFound) {
      // alert("Login");
      navigate("/create");
    } else {
      alert("Not Exist");
    }

    // console.log({ email, password });
  };

  return (
    <>
      <Nav />
      <section className="user-signin">
        <div className="user-signin-wrapper section-spacing">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Loginn;
