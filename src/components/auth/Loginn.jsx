import React, { useState } from "react";
import "../blog/blog.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "../nav/Nav";

const Loginn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data = JSON.parse(localStorage.getItem("userData"));

  // const [data, setData] = useState(getData);

  const navigate = useNavigate();
  // console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    const userFound = data.find(
      (user) => user.email === email && user.password === password
    );

    if (userFound) {
      toast("🦄Login Successfully!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      localStorage.setItem("foundData", JSON.stringify(userFound));

      setTimeout(() => {
        navigate("/blog");
      }, 2000);
    } else {
      // alert("Not Exist");
      toast("🦄User not Exist !", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </section>
    </>
  );
};

export default Loginn;
