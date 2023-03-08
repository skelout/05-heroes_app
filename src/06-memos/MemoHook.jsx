import { memo, useMemo, useState } from "react";
import { useCounter } from "../hooks"

const heavyStuff = (numberIt = 1000) => {
  for(let i=1; i<numberIt;i++){
    console.log('Vamos');
  }
  return `${numberIt} iteracion realizada`
}

export const MemoHook = () => {
  // EL USEMEMO TIENE QUE VER CON LO QUE SE EXPLICO EN MEMORIZE
  // HAY UNA FUNCION PESADA (HEABYSTUFF) QUE SOLO QUIERO QUE SE EJECUTE
  // UNICA Y EXLUSIVAMENTE CUANDO LA DEPENDENCIA [COUNTER] CAMBIE
  // SI CAMBIA CUALQUIER OTRA COSA, NO SE EJECUTA LA FUNCION 
    const {counter, increment} = useCounter(1000);
    const [show, setShow] = useState(true);

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter]);

  return (
    <>
      <h1>Memo Hook</h1>
      <h1>Counter: <small>{ counter }</small></h1>
      <h4>{memorizedValue}</h4>
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
