import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allUsers, deleteUser } from "../../redux/actions/UserAction";
import "./user.css";

const User = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allUsers());
  }, [dispatch]);

  const user = useSelector((state) => state.userReducer);
  console.log("ALL USERS:", user.users);

  return (
    <>
      <section className="users">
        <div className="user-wrapper section-spacing">
          <h1>All Users</h1>
          {user.isLoading && <p>Loading...</p>}
          {user.error && <p>Error: {user.error}</p>}
          {user.users && (
            <ul>
              {user.users.map((userData) => (
                <li key={userData.userId}>
                  <strong>Name:</strong> {userData.name},{" "}
                  <strong>Email:</strong> {userData.email}
                  <button onClick={() => dispatch(deleteUser(userData.userId))}>
                    {" "}
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </>
  );
};

export default User;
