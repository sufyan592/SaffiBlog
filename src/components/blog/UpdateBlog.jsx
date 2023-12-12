import React, { useState, useEffect } from "react";
import "./blog.css";
import { useNavigate, useParams } from "react-router-dom";
import { singleBlogData, updateBlogData } from "../../redux/actions/BlogAction";
import { useSelector, useDispatch } from "react-redux";
import Nav from "../nav/Nav";

const UpdateBlog = () => {
  const { updateId } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [author, setAuthor] = useState("");
  // const [ispending, setPending] = useState(false);
  const data = useSelector((state) => state.blogReducer.blog);
  console.log("Updated Data:", data);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!updateId) {
      return;
    }
    dispatch(singleBlogData(updateId));
  }, [updateId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPending(true);

    // fetch(`http://localhost:8000/blog/${updateId}`, {
    //   method: "PATCH",
    //   body: JSON.stringify({ title, paragraph, author }),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     // Check if the request was successful
    //     if (!res.ok) {
    //       throw new Error(`HTTP error! Status: ${res.status}`);
    //     }

    //     // Update state or handle success as needed
    //     setPending(false);
    //     navigate("/blog");
    //   })
    //   .catch((error) => {
    //     console.error("Error updating blog data:", error.message);
    //     setPending(false);
    //     // Handle error, show user a message, etc.
    //   });
    if (!updateId) {
      window.alert("Id required");
      return;
    }
    dispatch(updateBlogData(updateId, { title, paragraph, author }));
    navigate("/blog");
  };

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setParagraph(data.paragraph);
      setAuthor(data.author);
    }
  }, [data]);

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
              onChange={(e) => setParagraph(e.target.value)}
            ></textarea>
            <label htmlFor="author">Author:</label>
            <select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <option value="sufyan">Sufyan</option>
              <option value="ramzan">Ramzan</option>
            </select>
            <input type="submit" value="Update..." />
          </form>
        </div>
      </section>
    </>
  );
};

export default UpdateBlog;
