import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

import {
  changeDescription,
  searchTodos,
  addTodo,
  clearField,
} from "./todoActions";

const TodoForm = ({
  searchTodos,
  addTodo,
  description,
  changeDescription,
  clearField,
}) => {
  //DENTRO DO COMPONENTE
  useEffect(() => {
    searchTodos();
  }, [searchTodos]);

  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? searchTodos() : addTodo(description);
    } else if (e.key === "Escape") {
      clearField();
    }
  };
  return (
    <div role="form" className="todoForm">
      <Grid cols="12 9 10">
        <input
          type="text"
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          value={description}
          onChange={changeDescription}
          onKeyUp={keyHandler}
        />
      </Grid>

      <Grid cols="12 3 2">
        <IconButton
          type="primary"
          icon="plus"
          onClick={() => addTodo(description)}
        />
        <IconButton type="info" icon="search" onClick={searchTodos} />
        <IconButton type="default" icon="close" onClick={clearField} />
      </Grid>
    </div>
  );
};

const mapStateToProps = (state) => ({
  description: state.todo.description,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    { changeDescription, searchTodos, addTodo, clearField },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
