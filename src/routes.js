import {React} from 'react'
import {Link,Route, Routes,BrowserRouter} from 'react-router-dom' 
 import ContextDemo from './components/ContextDemo'
 import Showdemo from './components/ShowDemo'
 import Parent from './components/Parent'
 import Fetch from './components/FetchDemo'
 import RouterHooksDemo from './components/RouterHooksDemo'
 import Dashboard from './components/Dashboard'
 import {Signup} from './components/validation/Signup'
 import MatLogin from './components/matLoginValidate/MatLogin'

 import App from './App'

 
function Routers() {
  return (
    <div>
         <BrowserRouter basename={window.location.pathname || ''}>  
           <Routes>
            <Route path='/' element={<Dashboard/>}   >
              <Route path='contextdemo' element={<ContextDemo/>} /> 
              <Route path='showdemo' element={<Showdemo/>}   /> 
              <Route path='interaction' element={<Parent/>} /> 
              <Route path='signup' element={<Signup/>} /> 
              <Route path='login' element={<MatLogin/>} /> 
              <Route path='fetch' element={<Fetch/>} />
              <Route path='fetch/:id' element={<RouterHooksDemo/>} /> 
 
            </Route>

             
          </Routes>  
          </BrowserRouter>
        </div>
  )
}

export default Routers