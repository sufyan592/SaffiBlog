import { useNavigate, useParams, Link } from "react-router-dom";
import useFetch from "./useFetch";
import Nav from "../../Components/Hero/Nav/Nav";

const BlogDetailed = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    data: blogs,
    isloading,
    error,
  } = useFetch("http://localhost:8000/blog/" + id);

  const deleteBlog = () => {
    fetch("http://localhost:8000/blog/" + id, {
      method: "DELETE",
    }).then((res) => {
      console.log("data deleted");
      navigate("/");
    });
  };
  console.log("Data", blogs);

  return (
    <>
      <Nav />
      <section className="blog-detailed">
        <div className="blog-detailed-wrapper section-spacing">
          {blogs && (
            <div>
              <h2>{blogs.title}</h2>
              <p>{blogs.shortparagraph}</p>
              <p>{blogs.paragraph}</p>
              <h5>Author:{blogs.author}</h5>
              <h5>Id:{blogs.id}</h5>
            </div>
          )}
        </div>
      </section>
      <div className="dlt-btn section-spacing">
        <button onClick={deleteBlog}>Delete</button>
        {blogs && <Link to={`/update/${blogs?.id}`}>Edit</Link>}
      </div>
    </>
  );
};

export default BlogDetailed;
