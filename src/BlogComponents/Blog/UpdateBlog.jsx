import React, { useState } from "react";
import "./blog.css";
import Nav from "../../Components/Hero/Nav/Nav";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const UpdateBlog = () => {
  const { updateId } = useParams();
  console.log(updateId);
  // const {
  //   data: blogs,
  //   isloading,
  //   error,
  // } = useFetch("http://localhost:8000/blog/" + updateId);

  const [title, setTitle] = useState("");
  console.log(title);
  const [paragraph, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [ispending, setPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    fetch("http://localhost:8000/blog/" + updateId, {
      method: "PATCH",
      body: JSON.stringify({ title, paragraph, author }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      // console.log("Data added", res.json());
      setPending(false);
    });
    navigate("/");
  };

  return (
    <>
      <Nav />
      <section className="create-blog">
        <div className="create-blog-wrapper section-spacing">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              placeholder="Enter title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="description">Description:</label>
            <textarea
              name="paragraph"
              placeholder="Enter Description"
              value={paragraph}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <label htmlFor="author">Author:</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="sufyan">Sufyan</option>
              <option value="ramzan">Ramzan</option>
            </select>
            {/* {!ispending && <input type="submit" value="Add Blog" />} */}

            <input type="submit" value="Update..." />
          </form>
          <div>
            {title}
            {author}
            {paragraph}
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateBlog;
