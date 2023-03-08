import { TodoItem } from "./TodoItem";

export const TodoList = ({todos, onDeleteTodo, onToggleTodo}) => {
  return (
    <ul className="list-group">
      {
        // AQUÍ ES DONDE SE VE CLARO LA UTILIDAD DEL CONTEXT. EL PADRE TODOLIST LE MANDA
        // AL HIJO TODOITEM LA REF DE LA FUNCION QUE VIENE DEL ABUELO (TODOAPP). ES UN
        // POCO MEJUNJE DE LLAMADAS, DE AHÍ SE VERÁ EL USO DEL CONTEXT
        todos.map(todo => (
        <TodoItem 
        key={todo.id} 
        todo = {todo} 
        onDeleteTodo = { onDeleteTodo }
        onToggleTodo = { onToggleTodo }
        />
        ))
      }
    </ul>
  );
};

