import React, { useState, createContext } from 'react'

export const store = createContext();

export default function Context({children}) {
    const [fullName, setName] = useState( {
        firstName: 'Rishab',
        lastName: 'Animesh'
    })
  return (
    <store.Provider value={{fullName, setName}}>
        {children}
    </store.Provider>
  )
}

