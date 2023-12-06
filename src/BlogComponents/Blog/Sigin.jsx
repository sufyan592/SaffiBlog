import React, { useState, useEffect } from "react";
import Nav from "../../Components/Hero/Nav/Nav";
import "./blog.css";
import { useNavigate } from "react-router-dom";

const Sigin = () => {
  const initialData = JSON.parse(localStorage.getItem("userData"));
  // const [data, setData] = useState(initialData);
  const emailRegix =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Cpassword, setCPassword] = useState("");
  const [data, setData] = useState([initialData]);
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [passErr, setPassErr] = useState(false);
  const [passCErr, setCPassErr] = useState(false);
  const navigate = useNavigate();
  // useEffect(() => {
  //   localStorage.setItem("userData", JSON.stringify(data));
  // }, [data]);
  const userId = Math.random();

  const handleSubmit = (e) => {
    e.preventDefault();

    setData((prevData) => [...prevData, { name, email, password, userId }]);

    // Use the updated state when saving to localStorage
    localStorage.setItem(
      "userData",
      JSON.stringify([...data, { name, email, password, userId }])
    );

    navigate("/login");
  };

  const handleName = (e) => {
    if (e.target.value.length < 3) {
      setNameErr(true);
    } else {
      setNameErr(false);
    }
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    if (!e.target.value.match(emailRegix)) {
      setEmailErr(true);
    } else {
      setEmailErr(false);
    }
    setEmail(e.target.value);
  };

  const handlePass = (e) => {
    if (e.target.value.length < 5) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(e.target.value);
  };

  // Uncomment the code below if you want to handle confirmPassword
  // const handleCPass = (e) => {
  //   setCPassword(e.target.value);
  //   if (password !== Cpassword) {
  //     setCPassErr(true);
  //   } else {
  //     setCPassErr(false);
  //   }
  // };

  return (
    <>
      <Nav />
      <section className="user-signin">
        <div className="user-signin-wrapper section-spacing">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name" value={name} onChange={handleName} />

            {nameErr ? (
              <p style={{ color: "red" }}>
                Name length must be 3 or more characters.
              </p>
            ) : (
              ""
            )}
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleEmail}
            />
            {emailErr ? (
              <p style={{ color: "red" }}>Enter a valid email.</p>
            ) : (
              ""
            )}
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={handlePass}
            />
            {passErr ? (
              <p style={{ color: "red" }}>Please enter a strong password.</p>
            ) : (
              ""
            )}

            {/* Uncomment the code below if you want to handle confirmPassword */}
            {/* <label htmlFor="Cpassword">Confirm Password:</label>
            <input
              type="password"
              name="Cpassword"
              value={Cpassword}
              onChange={handleCPass}
            />
            {passCErr ? (
              <p style={{ color: "red" }}>Password not matched.</p>
            ) : (
              ""
            )} */}
            <button type="submit">Signin</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Sigin;
