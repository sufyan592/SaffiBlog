import React, { useState } from "react";

const MultiForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
  });

  const handlevalue = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setData((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
  };

  return (
    <>
      <section className="user-signin">
        <div className="user-signin-wrapper section-spacing">
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handlevalue}
            />
            <label htmlFor="email">email:</label>
            <input
              type="email"
              name="email"
              value={data.password}
              onChange={handlevalue}
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default MultiForm;
