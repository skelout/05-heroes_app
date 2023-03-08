import {useForm} from '../hooks/useForm'
export const TodoAdd = ({ oneNewTodo }) => {
  
  const {description, onInputChange, onResetForm} = useForm({
      description: '',
  });

  const onFormSubmit = (event) => {
    event.preventDefault(); // Para que la pagina no se recargue
    if (description.length <= 1) return;

    const newTodo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    }
    oneNewTodo(newTodo);
    onResetForm();
  }

  return (
    <form onSubmit={ onFormSubmit }>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="description"
        value={ description }
        onChange={onInputChange}
      />

      <button
        type="submit"
        className="btn btn-outline-primary mt-2"
      >
        Agregar
      </button>
    </form>
  );
};
