import { useForm } from "../hooks/useForm"

export const FormWithCustomHook = () => {

    // const {formState, onInputChange} = useForm({
        // usuario: '',
        // email: '',
        // password: '',
    // });
    // Manera super PRO de acceder a los elementos que manda useForm
    // Solo funciona se mando el formState desestructurado --> ... desde el useForm
    const{formState, onInputChange, usuario, email, password, onResetForm} = useForm({
        usuario: '',
        email: '',
        password: '',
    });

    // const {usuario, email, password} = formState;
      
    return (
        <>
            <h1>Formulario con custom Hook</h1>
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
            <input 
                type="password" 
                className="form-control mt-2"
                placeholder="Contraseña"
                name = "password"
                value={ password }
                onChange={ onInputChange }
            />
            <button className="btn btn-secondary mt-2" onClick={onResetForm}>RESET</button>
            <hr />       
        </>
    )
}
