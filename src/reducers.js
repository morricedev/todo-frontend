import { combineReducers } from "redux";

const INITIAL_STATE = {
  description: "",
  list: [],
};

const rootReducer = combineReducers({
  todo: (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case "DESC_CHANGED":
        return { ...state, description: action.payload };
      case "TODO_SEARCHED":
        return { ...state, list: action.payload };
      case "TODO_CLEAR":
        return { ...state, description: "" };
      default:
        return state;
    }
  },
});

export default rootReducer;
