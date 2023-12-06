import React, { useState } from "react";
import "./blog.css";
import Nav from "../../Components/Hero/Nav/Nav";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [paragraph, setDescription] = useState("");
  const [author, setAuthor] = useState("sufayn");
  const [ispending, setPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    const data = { title, paragraph, author };
    console.log(data);
    e.preventDefault();
    setPending(true);
    fetch("http://localhost:8000/blog", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Data added", res.json());
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
            {ispending ? (
              <input type="submit" value="Adding Blog..." />
            ) : (
              <input type="submit" value="Add Blog" />
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default CreateBlog;
