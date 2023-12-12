import React, { useState } from "react";
import "./nav.css";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Nav = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("foundData"));
  const [data, setData] = useState(false);
  console.log(data);
  const removeData = () => {
    setData(localStorage.removeItem("foundData"));
    toast("🦄Logout Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <>
      {userData ? (
        <section className="nav">
          <div className="nav-wrapper section-spacing">
            <div className="nav-left">
              <h3>SaffiTech</h3>
            </div>
            <div className="nav-right">
              {/* <li>
                <NavLink to="/">Home</NavLink>
              </li> */}
              {/* <li>
              <NavLink to="/create">Create</NavLink>
            </li> */}

              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
              <li>
                <NavLink to="/create">Create</NavLink>
              </li>
              {/* <li>
                <NavLink onClick={removeData}>Logout</NavLink>
              </li> */}
              {removeData ? <button onClick={removeData}>Logout</button> : ""}
            </div>
          </div>
        </section>
      ) : (
        <section className="nav">
          <div className="nav-wrapper section-spacing">
            <div className="nav-left">
              <h3>SaffiTech</h3>
            </div>
            <div className="nav-right">
              <li>
                <NavLink to="/signin">Signup</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </div>
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
      )}
    </>
  );
};

export default Nav;
