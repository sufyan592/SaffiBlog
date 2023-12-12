import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";

const BlogList = ({ data }) => {
  const { title, author, shortparagraph, id } = data;
  return (
    <>
      <section className="blog-list">
        <div className="blog-list-wrapper">
          <div className="blog-list-content">
            <Link to={`/blog/${id}`}>
              <h2>{title}</h2>
              <p>{shortparagraph}</p>
              <h5>Author:{author}</h5>
              {/* <button
              className="btn-primary dlt-btn"
              onClick={() => deleteblog(data.id)}
            >
              Delete
            </button> */}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
