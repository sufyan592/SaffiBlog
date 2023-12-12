import { useNavigate, useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Nav from "../nav/Nav";
import { singleBlogData, deleteBlogData } from "../../redux/actions/BlogAction";

const BlogDetailed = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const blogs = useSelector((state) => state.blogReducer);

  // const [blogs, setState] = useState();
  // dispatch(singleBlogData(id));
  // console.log(id);

  useEffect(() => {
    dispatch(singleBlogData(id));
  }, [dispatch, id]);
  // const {
  //   data: blogs,
  //   isloading,
  //   error,
  // } = useFetch("http://localhost:8000/blog/" + id);

  // useEffect(() => {
  //   fetch("http://localhost:8000/blog/" + id)
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((dataa) => {
  //       setState(dataa);
  //       console.log(dataa);
  //     });
  // }, []);

  const deleteBlog = () => {
    // fetch("http://localhost:8000/blog/" + id, {
    //   method: "DELETE",
    // }).then((res) => {
    //   console.log("data deleted");
    //   navigate("/");
    // });
    dispatch(deleteBlogData(id));
    navigate("/blog");
  };

  return (
    <>
      <Nav />
      <section className="blog-detailed">
        <div className="blog-detailed-wrapper section-spacing">
          {blogs.isLoading && <p className="section-spacing">Loading...</p>}
          {blogs.error && <p className="section-spacing">Error...</p>}
          {blogs.blog && (
            <div>
              <h2>{blogs.blog.title}</h2>
              <p>{blogs.blog.shortparagraph}</p>
              <p>{blogs.blog.paragraph}</p>
              <h5>Author:{blogs.blog.author}</h5>
              <h5>Id:{blogs.blog.id}</h5>
            </div>
          )}
        </div>
      </section>
      <div className="dlt-btn section-spacing">
        <button onClick={deleteBlog}>Delete</button>
        {blogs.blog && <Link to={`/update/${blogs.blog.id}`}>Edit</Link>}
      </div>
    </>
  );
};

export default BlogDetailed;
