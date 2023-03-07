import { useEffect } from "react";
export const Message = () => {
    useEffect(() => {
        // Se ejecuta aquí cuando el componente empieza a existir
        // console.log('Message Mounted');
        const onMouseMove = ({x,y}) => {
            const coords = {x, y};
            console.log(coords);
        }
        window.addEventListener('mousemove', onMouseMove);
        return () => {
        // Se ejecuta aquí cuando el componente deja de existir
        // console.log('Message Unmounted');
        window.removeEventListener('mousemove', onMouseMove);
    }
    }, [])
    
    return (
        <>
            <h3> Usuario ya existe</h3>
        </>
    )
}
