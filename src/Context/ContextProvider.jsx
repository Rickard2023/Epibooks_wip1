import React, { createContext, useState } from 'react'

export const Context = createContext(null);


export default function ContextProvider({children}) {

  const [ticks, setTicks] = useState(['','','','','']);

  return (
    <Context.Provider
      value = {
        {
          ticks, 
          setTicks
        }
      }
    >

      {children}
    </Context.Provider>
  )
}
