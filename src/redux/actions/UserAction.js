export const allUsers = () => {
  return async (dispatch) => {
    dispatch({ type: "REQUEST_USERS" });
    try {
      const users = JSON.parse(localStorage.getItem("userData")) || [];
      console.log("Users from localStorage:", users);
      dispatch({
        type: "ALL_USERS",
        payload: users,
      });
    } catch (error) {
      console.log(error);
      dispatch({ type: "USERS_FAILURE_ERROR" });
    }
  };
};

export const deleteUser = (id) => {
  return async (dispatch) => {
    // console.log(id);
    dispatch({
      type: "DELETE_USER",
      payload: id,
    });
  };
};
