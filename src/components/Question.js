import React, { useContext, useState } from 'react'
import { stateContext } from '../hooks/useStateContext'

export default function Question() {
   const{context, setContext} = useStateContext()
   setContext({timeTaken:1})
  return (
    <div>Question</div>
  )
}
