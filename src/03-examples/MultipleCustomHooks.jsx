import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from "./";
export const MultipleCustomHooks = () => {
  
  const {counter, increment} = useCounter(1);
  const {data, isLoading, hasError} = useFetch(`https://thronesapi.com/api/v2/Characters/${counter}`);
  // Traducción: si el dato contiene algún valor, toma el primero
  const {fullName, title, imageUrl} = !!data && data;
  return (
    <>
      <h1>Juego de Tronos</h1>
        {
          isLoading ? <LoadingQuote /> : ( <Quote fullName={fullName} title={title} imageUrl = {imageUrl} />)
        }
        <div className="container clearfix">
          <button 
        className="btn btn-primary float-start mt-2"
        onClick={() => increment()}
        disabled={isLoading}>
          Next character
          </button>
        </div>
      <hr />
    </>
  )
}
