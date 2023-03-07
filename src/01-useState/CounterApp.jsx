import { useState } from "react"
export const CounterApp = () => {
    // Recordatorio: useState modifica valores en tiempo real.
    // Lo que acepta por argumento es el valor inicial que tendrá la variable
    // Para modificarla, llamo a setCounter pero directamente le paso el nuevo 
    // valor (Sin necesidad de counter = counter + 1)
    // AQUI LA COSA ES LA SIGUIENTE. SI TENGO UN USESTATE DE UN OBJETO, CON 
    // SUS RESPECTIVAS PROPIEDADES, TENGO QUE TENER CUIDADO AL HACER SET
    // PORQUE ESTO HARÁ QUE SE MODIFIQUE EL ESTADO COMPLETO DE ESE OBJETO.
    // SI QUIERO CONSERVAR SUS PROPIEDADES, NECESITO LLAMAR AL SET CON LLAVES {}
    // Y PONER COMO PRIMER VALOR, ...state PARA QUE DEJE EL RESTO DE PROPIEDADES
    // COMO ESTABAN Y YA MODIFICAR AQUELLA PROPIEDAD QUE QUIERO EN TIEMPO REAL. 
    const [counter, setCounter] = useState(10);
    const [state, setState] = useState({
        cnt1: 10,
        cnt2: 20,
        cnt3: 30,
    });

    const {cnt1, cnt2, cnt3} = state;
    return (
        <>
            <h1> Counter 1: {cnt1}</h1>
            <h1> Counter 2: {cnt2}</h1>
            <h1> Counter 3: {cnt3}</h1>


            <button className="btn btn-secondary" onClick={() => setState({
                ...state,
                cnt1: cnt1+1,
            })}>Suma +1</button>
            <hr />
        </>
    )
}
