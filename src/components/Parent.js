import React , {useState, useRef} from 'react'
import Child from './Child'
 
 const arr= [1,2,3,4,5,6,7]

 function Parent() {
   const [childData, setchildData] = useState('')
   const [numbers, setNumbers] = useState(arr)
   console.log('checking variable inside useState', numbers)

   const parentData = useRef('this is parent data')
    const getChildData= (data)=>{ 
    setchildData(data)
   }
   return (
    <div>
        Parent Component
        <Child data={parentData.current} handleChildData={getChildData}/>
        <h2>The child msg inside parent component is  {childData}</h2><br/><br/>

        

     </div>
  )
}

export default Parent
