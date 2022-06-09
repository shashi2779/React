import React, { useState,useContext } from 'react'

let context = React.createContext(null)

function Parent() {
    const [firstName,setFirstName] = useState('shashi')
    const [lastName,setLastName] = useState('yadav')

  return (
   <context.Provider value={{firstName,lastName}}>
       <ChildA/>
   </context.Provider>
    
  )
}

function ChildA() {
    return (
      <div>
          <ChildB/>
      </div>
    )
  }

  function ChildB() {
    return (
      <div>
          <ChildC/>
      </div>
    )
  }

  function ChildC() {
      const {firstName,lastName} = useContext(context)
    return (
      <div>
          <h1>{firstName}</h1>
          <h1>{lastName}</h1>
      </div>
    )
  }

export default Parent