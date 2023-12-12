const initialState = {
  users: [],
  isLoading: false,
  error: null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REQUEST_USERS":
      return {
        ...state,
        users: [],
        isLoading: true,
      };

    case "ALL_USERS":
      return {
        ...state,
        users: action.payload,
        isLoading: false,
      };

    case "USERS_FAILURE_ERROR":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };

    case "DELETE_USER":
      const updatedUsers = state.users.filter(
        (user) => user.userId !== action.payload
      );
      localStorage.setItem("userData", JSON.stringify(updatedUsers));

      return {
        ...state,
        isLoading: false,
        users: updatedUsers,
      };

    default:
      return state;
  }
};
