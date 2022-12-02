import React, {useContext} from 'react';
import { store } from "./Context"
 
export default function Showdemo() {
    const {fullName, setName} = useContext(store)

  return (
    <div>
        <p>Showdemo</p>
        <p>{fullName.firstName}</p>
    </div>
  )
}