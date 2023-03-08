import { useRef } from "react"

export const FocusScreen = () => {
    const input_ref = useRef();
    const onClick = () => {
        input_ref.current.select();
    }
  return (
    <>
        <h1>Focus screen</h1>

        <input 
        ref= {input_ref}
        type="text" 
        placeholder="Ingrese su nombre"
        className="form-control" 
        />
        <button 
        className="btn btn-primary mt-2"
        onClick={onClick}
        >
             Set focus
        </button>
        <hr />
    </>
  )
}
