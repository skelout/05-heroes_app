// import {memo} from 'react';
// OPCION 1
// export const Small = memo(({ value }) => {
//     console.log(' Me volví a dibujar :(');
//   return (
//     <small>{value}</small>
//   )
// })

// OPCION 2
import React from 'react'
export const Small = ({ value }) => {
    console.log(' Me volví a dibujar :(');
  return (
    <small>{value}</small>
  )
}