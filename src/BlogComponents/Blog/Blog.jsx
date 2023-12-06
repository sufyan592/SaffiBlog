import React, { useEffect, useState } from "react";
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Blog = () => {
  const {
    data: blogs,
    isloading,
    error,
  } = useFetch("http://localhost:8000/blog");

  // useEffect(() => {
  //   fetch("http://localhost:8000/blog")
  //     .then((res) => {
  //       if (!res.ok) {
  //         throw new Error("Failed to featch the Data!");
  //       }
  //       return res.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setBlog(data);
  //       setLoading(false);
  //       setError(false);
  //     });
  // }, []);
  // const deleteblog = (id) => {
  //   const fltrBlog = blogs.filter((val) => {
  //     if (val.id !== id) {
  //       return val;
  //     }
  //   });
  //   setBlog(fltrBlog);
  // };

  return (
    <>
      <section className="myBlog">
        <div className="myBlog-wrapper section-spacing">
          <h1>Saffi Tech</h1>

          {blogs &&
            blogs.map((blogData, i) => {
              return (
                <>
                  {/* <BlogList data={blogData} deleteblog={deleteblog} key={i} /> */}
                  <BlogList data={blogData} />
                  <p></p>
                </>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default Blog;
