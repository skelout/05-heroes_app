import { Button } from "bootstrap";
import { useCounter } from "../hooks/useCounter"
import { SimpleForm } from "../02-useEffect/SimpleForm";
export const CounterWithCustomHook = () => {

  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
        <h1>Counter with Hook: {counter}</h1>
        {/* EXPLICACIÓN DE LO QUE OCURRE REALMENTE EN EL ONCLICK PONIENDOLO DE OTRA FORMA */}
        {/* <button className="btn btn-primary" onClick={ (event) => increment(event) }>+1</button> */}
        {/* Es decir, lo que le paso al increment es todo el evento click (un objeto) */}
        {/* La cosa es, y si increment acepta como argumento otras cosas? Ints, strings, etc */}
        {/* Ahora mira la siguiente línea: en este caso, cuando ocurre el evento onClick, lo que hago es mandarle
        a increment un argumento diferente. En los primeros () de la funcion lambda sigo enviando el evento onclick */}
        <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
        <button className="btn btn-primary" onClick={reset}>RESET</button>
        <button className="btn btn-primary" onClick={() => decrement(2)}>-1</button>
        <hr />
    </>
    )
}
