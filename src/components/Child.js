import React from 'react'

let childData= 'HELLOOOO'
function Child(props) {
    console.log('childdata in child component ',childData )
   return (
    <div>
        Child Component
        <h2> {props.data}</h2>
        <button onClick={()=>props.handleChildData(childData)}> submit child data</button>
    </div>
  )
}

export default Child
