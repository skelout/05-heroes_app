import { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
    const [counter, setCounter] = useState(10);
    // El useCallBack está relacionado con el memo. Sirve para cuando lo que memorizamos
    // lo hacemos a través de una función. Una función, cada vez que se ejecuta, tiene
    // una direccion de memoria diferente, por lo que aunque tenga puesto el memo en 
    // el componente, siempre va a detectar que el counter está cambiando por estar haciéndolo
    // a través de una función
    const incrementFather = useCallback((value) => {
        setCounter( (cnt) => cnt+value );
    }, []);

  return (
    <>
        <h1>useCallBack Hook: {counter}</h1>
        <ShowIncrement increment = {incrementFather}/>
        <hr />
    </>
  )
}
