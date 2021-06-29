import React, { memo } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import styled from "styled-components";

import IconButton from "../template/IconButton";

import { markAsDone, markAsPending, removeTodo } from "./todoActions";

const Tr = styled.tr`
  .markedAsDone {
    text-decoration: line-through;
    color: #777;
  }
`;

const TodoList = ({ list, markAsDone, markAsPending, removeTodo }) => {
  const renderRows = () => {
    list = list || [];
    return list.map((todo) => {
      return (
        <Tr key={todo._id}>
          <td className={todo.done ? "markedAsDone" : ""}>
            {todo.description}
          </td>
          <td>
            <IconButton
              hide={todo.done}
              type="success"
              icon="check"
              onClick={() => markAsDone(todo)}
            />
            <IconButton
              hide={!todo.done}
              type="warning"
              icon="undo"
              onClick={() => markAsPending(todo)}
            />
            <IconButton
              type="danger"
              icon="trash-o"
              onClick={() => removeTodo(todo)}
            />
          </td>
        </Tr>
      );
    });
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  list: state.todo.list,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ markAsDone, markAsPending, removeTodo }, dispatch);

export default memo(connect(mapStateToProps, mapDispatchToProps)(TodoList));
