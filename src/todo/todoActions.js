import axios from "axios";

const URL = "http://localhost:3003/api/todos";

export const changeDescription = (event) => ({
  type: "DESC_CHANGED",
  payload: event.target.value,
});

export const searchTodos = () => {
  return (dispatch, getState) => {
    const description = getState().todo.description;
    const search = description ? `&description__regex=/${description}/i` : "";
    axios(`${URL}?sort=-createdAt${search}`).then((res) =>
      dispatch({
        type: "TODO_SEARCHED",
        payload: res.data,
      })
    );
  };
};

// WITH MULTI
// export const add = (description) => {
//   const request = axios.post(URL, { description });
//   return [
//     {
//       type: "TODO_ADDED",
//       payload: request,
//     },
//     search(),
//   ];
// };

//WITH REDUX THUNK
export const addTodo = (description) => {
  return (dispatch) => {
    axios
      .post(URL, { description })
      .then((_) => dispatch(clearField()))
      .then((_) => dispatch(searchTodos()));
  };
};

export const markAsDone = (todo) => {
  return (dispatch) => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then((_) => dispatch(searchTodos()));
  };
};

export const markAsPending = (todo) => {
  return (dispatch) => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then((_) => dispatch(searchTodos()));
  };
};

export const removeTodo = (todo) => {
  return (dispatch) => {
    axios.delete(`${URL}/${todo._id}`).then((_) => dispatch(searchTodos()));
  };
};

export const clearField = () => {
  return [
    {
      type: "TODO_CLEAR",
    },
    searchTodos(),
  ];
};
