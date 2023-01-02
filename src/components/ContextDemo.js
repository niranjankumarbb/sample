
import React , {useContext} from 'react'
import { store } from "./Context"

function ContextDemo() {
    const {fullName, setName}= useContext(store)
  return (
    <div>
        <h2>ContextDemo</h2>
        <h2>{fullName.lastName}</h2>
    </div>
  )
}

export default ContextDemo