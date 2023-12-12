import React, { useEffect } from "react";
import BlogList from "./BlogList";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogData } from "../../redux/actions/BlogAction";
import Nav from "../nav/Nav";

const UserBlog = () => {
  const userData = JSON.parse(localStorage.getItem("foundData"));
  const dispatch = useDispatch();
  const data = useSelector((state) => state.blogReducer);
  console.log("USER data:", data);

  useEffect(() => {
    dispatch(fetchBlogData());
  }, [dispatch]);
  // const {
  //   data: blogs,
  //   isloading,
  //   error,
  // } = useFetch("http://localhost:8000/blog");
  const userBlogData =
    data?.blogs &&
    data.blogs?.filter((userBlog) => userBlog?.author === userData?.name);
  return (
    <>
      <Nav />

      <section className="myBlog">
        <div className="myBlog-wrapper section-spacing">
          <h1>Welcome {userData?.name}</h1>
          {data?.isLoading && <p className="section-spacing">Loading...</p>}
          {data?.error && <p className="section-spacing">Error...</p>}
          {userBlogData &&
            userBlogData?.map((blogData, i) => {
              return (
                <>
                  <BlogList data={blogData} key={i} />
                </>
              );
            })}
        </div>
      </section>
    </>
  );
};

export default UserBlog;
