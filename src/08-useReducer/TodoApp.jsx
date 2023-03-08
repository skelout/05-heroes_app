import { useTodos } from "../hooks/";
import { TodoAdd } from "./TodoAdd";
import { TodoList } from "./TodoList";

export const TodoApp = () => {
  const { state, todosCount, pendingCounts, handleNewTodo, handleDeleteTodo, onToggleTodo } = useTodos();
  return (
    <>
      <h1>
        TodoApp: {todosCount()},
        <small>
          Pendientes:{ pendingCounts() }
        </small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={state}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          <TodoAdd oneNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
