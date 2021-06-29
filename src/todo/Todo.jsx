import React from "react";
import styled from "styled-components";

import PageHeader from "../template/PageHeader";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoWrapper = styled.div`
  .tableActions {
    width: 105px;
  }

  .todoForm {
    padding-bottom: 60px;
  }

  .col-md-2 {
    padding-right: 0px;
  }
`;

const Todo = () => {
  return (
    <TodoWrapper>
      <PageHeader name="Tarefas" small="Cadastro" />
      <TodoForm />
      <TodoList />
    </TodoWrapper>
  );
};

export default Todo;
