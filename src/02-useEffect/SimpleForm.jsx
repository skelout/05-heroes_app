import { useState, useEffect } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    const [formState, setformState] = useState({
        usuario: 'strider',
        email: 'pordefecto@porfecto.com',
    })
    const {usuario, email} = formState;
    // const onInputChange = (event) => {
    //     console.log(event.target.name)
    // }
    const onInputChange = ({ target }) => {
        const {name, value} = target;
        console.log({name, value});
        setformState({
            ...formState,
            [ name ]: value,
        });
    }
    // Sirve para disparar efectos secundarios 
    // Nota: lo llama dos veces por el <React.StrictMode>

    // El useEffect solo se llama una vez en tu código porque no has especificado ninguna dependencia
    //  en el arreglo de dependencias del useEffect. Por defecto, el useEffect se ejecuta una vez después
    //  del primer renderizado.

    // Si deseas que el useEffect se ejecute cada vez que el estado del componente cambie, debes especificar
    //  las dependencias en el arreglo de dependencias del useEffect. Por ejemplo, si deseas que el useEffect
    //  se ejecute cada vez que el estado del formulario cambie, puedes incluir el estado del formulario en
    //  el arreglo de dependencias como sigue:
    
    // useEffect(() => {
    //     console.log('useEffect called!');
    // }, [formState])
    // De esta manera, el useEffect se ejecutará cada vez que el estado del formulario cambie.
    
    // También puedes especificar múltiples dependencias en el arreglo de dependencias si deseas que
    //  el useEffect se ejecute cuando cualquiera de ellas cambie. Por ejemplo:
    
    // useEffect(() => {
    //     console.log('useEffect called!');
    // }, [usuario, email])
    // En este caso, el useEffect se ejecutará cada vez que el valor de "usuario" o "email" cambie.
    
    // OTRA COSA: SE RECOMIENDA NO TENER UN useEffect() GRANDE, SINO VARIOS CADA UNO HACIENDO UNA COSA

    useEffect(() => {
        // console.log('form changed!');
      }, [formState])

      useEffect(() => {
        // console.log('email changed!');
      }, [email])

      useEffect(() => {
        // console.log('usuario changed!');
      }, [usuario])
      

    return (
        <>
            <h1>Formulario simple</h1>
            <input 
            type="text" 
            className="form-control"
            placeholder="Pon aqui tu nombre de usuario"
            name="usuario"
            value={usuario}
            onChange={ onInputChange }
            />
            
            <input 
            type="email" 
            className="form-control mt-2"
            placeholder="Pon aquí tu correo"
            name = "email"
            value={email}
            onChange={ onInputChange }
            />
            {
            /* Interesante notar que de esta forma (con el useEffect en el Message, el compontente
                aparece y desaparece, no solo se esconde, como sí ocurre cuando se utiliza la classe hidden) 
            */
            }
            {
                (usuario === 'strider2') && <Message />
            }
            <hr />       
        </>
    )
}
