// A parte de los args que pueda necesitar según los casos,
// es recomendable que siempre tenga uno que sea children

import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
//     id: 123,
//     name: 'Fermando',
//     email: 'paco@gmail.com',
// };

// que son todos los elementos hijos de nuestro componente
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState()
    return (
    // La información almacenada en value es el valor que cualquier
    // hijo de UserProvider podrá obtener del user context
    <UserContext.Provider value={{user, setUser}}>
        { children }
    </UserContext.Provider>
    );
};