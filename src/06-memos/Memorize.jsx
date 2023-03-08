import { useState } from "react";
import { useCounter } from "../hooks"
import { Small } from "./Small";

export const Memorize = () => {
    // LA COSA AQUÍ ES LA SIGUIENTE: TENGO EL BOTÓN DE INCREMENTAR CONTADOR
    // CADA VEZ QUE LO PULSO, ES CORRECTO QUE SE RENDERICE EL COMPONENTE
    // SMALL, QUE ES HIJO DEL COMPONENTE MEMORIZE. SIN EMBARGO, NO SERÍA
    // CORRECTO QUE SE VOLVIER A EJECUTAR CUANDO CAMBIA CUALQUIER OTRO 
    // COMPONENTE DEL PADRE, COMO POR EJEMPLO EL OTRO BOTÓN.
    // PARA ESTE CASO, DA IGUAL PORQUE LOS COMPONENTES SON PEQUEÑOS, 
    // PERO SI EL COMPONENTE SMALL FUERA GRANDE O PESADO, SERÍA 
    // RECOMENDABLE USAR MEMO EN EL COMPONENTE QUE NO QUIERO QUE CAMBIE
    const {counter, increment} = useCounter(10);
    const [show, setShow] = useState(true);
  return (
    <>
        <h1>Memorize</h1>
        <h1>Counter: <Small value={counter} /></h1>
        <button
            className="btn btn-primary"
            onClick={ () => increment()}
        >
            +1
        </button>
        <button 
          className="btn btn-primary"
          onClick={() => setShow(!show)}  
        >
          Show/Hide {JSON.stringify(show)}
        </button>
        <hr />

    </>
  )
}
