// VER DOCS: https://beta.reactjs.org/reference/react/useReducer
const initialState = [{
    id: 1,
    todo: 'Recolectar la piedra del Alma',
    done: false,
}];

// NOTA: ... operador SPREAD
// UN REDUCER TIENE QUE RECIBIR SIEMPRE UN ESTADO ANTERIOR (QUE AL PRINCIPIO ES  EL INICIAL)
// Y TAMBIÉN RECIBIR UNA ACCIÓN: GET, POST, DELETE... ETC. ALGO QUE CAMBIA EL ESTADO
// ES IMPORTANTE DESTACAR QUE NO SE PUEDE MUTAR EL ESTADO "A PELO": STATE.PUSH O ALGO ASI
// SINO QUE SE DEBE HACER A TRAVÉS DE OTRA FUNCION QUE TENGA COMO TIPO UNA CADENA QUE EXPLICA
// LA ACCION Y UN PAYLOAD (LA ACCION QUE EJECUTA). 
// EL REDUCER DEVE DEVOLVER SIEMPRE UN ESTADO. SI ENCONTRAMOS LA ACCIÓN, LA EJECUTAMOS Y DEVOLVEMOS
// EL NUEVO ESTADO Y SI NO ENCONTRAMOS DICHA ACCIÓN, DEVOLVEMOS EL MISMO ESTADO ANTERIOR
const todoReducer = ( state = initialState, action = {}  ) => {
    
    if(action.type === '[TODO] add todo') return [...state, action.payload];

    return state;
}

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}
const addTodoAction = {
    type: '[TODO] add todo',
    payload : newTodo,
}

todos = todoReducer( todos, addTodoAction);

console.log({state: todos});