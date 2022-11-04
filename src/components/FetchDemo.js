import React, {useState} from 'react'
import { Avatar } from "@material-ui/core";

 
function FetchDemo() {
    const [todos, setTodos]= useState([])
 
    const handleFetch= ()=>{
        fetch("https://jsonplaceholder.typicode.com/todos")
        .then((response) => {
            return (
                response.json()
                // console.log('fetch response.json value', response)
            )
        })        
        .then((json) => {
           setTodos(json);
        });
    }
    
  return (
    <div>
        <h2>FetchDemo</h2>
        <h4> Click on the links to see the useParams demo </h4>
        <ul>
            <li><a href='/fetch/1'>Link1</a></li>
            <li><a href='/fetch/2'>Link2</a></li>
            <li><a href='/fetch/3'>Link3</a></li>
            <li><a href='/fetch/4'>Link4</a></li>
            <li><a href='/fetch/5'>Link5</a></li>
        </ul><br/><br/>

        <h4> Avatar demo</h4>
        <Avatar  alt="Cindy Baker" src="data:image/jpeg;base64,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" />
        <Avatar style={{ backgroundColor: 'purple' }}>NK</Avatar><br/><br/>

         <button type="button" className="btn btn-primary" onClick={handleFetch}>Fetch data using fetch</button> 
         <button type="button" className="btn btn-primary"  style={{display: 'inline', marginLeft: '50px', pointerEvents: 'none'}} >Demonstrate pointer events</button><br/><br/>

        {/* {JSON.stringify(todos)} */}
        {todos.map(item=>{
            return (
                <li key={item.id}>{item.title}</li>
            )
        })}
    </div>
  )
}

export default FetchDemo