import React, { useContext } from 'react'
import { createContext } from 'react';
import { useState } from 'react';


export const stateContext = createContext();

const getFreshContext = () => {    
    return {
        participantID: 0,
        timeTaken: 0,
        selectedOptions: [],
    }
}

export function useStateContext() {
    const [context, setContext] = useContext(stateContext)
    return {context, setContext: obj => {setContext({...context, ...obj})}};
}


export function ContextProvider({children}) {
    const [context, setContext] = useState(getFreshContext())

  return (
    <stateContext.Provider value={[context, setContext]}>    
        {children}
    </stateContext.Provider>
  )
}
