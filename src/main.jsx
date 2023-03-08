import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
// import { Padre } from './07-tarea-memo/Padre';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { CallbackHook } from './06-memos/CallbackHook';
// import { MemoHook } from './06-memos/MemoHook';
// import { Memorize } from './06-memos/Memorize';
// import { HooksApp } from './HooksApp';

import './index.css'
// import { TodoApp } from './08-useReducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  // EL BROWSER ROUTER SE CONOCE COMO HIGHER ORDER COMPONENTS
  // Son componentes como otro cualquiera, solo que recibe
  // otros componentes dentro de él. Como si fuera un div
  <BrowserRouter>
    {/* <TodoApp /> */}
    {/* <HooksApp />
    <CounterApp />
    <CounterWithCustomHook />
    <SimpleForm />
    <FormWithCustomHook />
    <MultipleCustomHooks />
    <FocusScreen /> */}
    {/* <Memorize />
    <MemoHook /> */}
    {/* <CallbackHook /> */}
    {/* <Padre /> */}
    <MainApp />
  </BrowserRouter>
  // </React.StrictMode>
)
