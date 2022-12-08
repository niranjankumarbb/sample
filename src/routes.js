import {React} from 'react'
import {Link,Route, Routes,BrowserRouter} from 'react-router-dom' 
 import ContextDemo from './components/ContextDemo'
 import Showdemo from './components/ShowDemo'
 import Parent from './components/Parent'
 import Fetch from './components/FetchDemo'
 import Register from './components/Register'

 import RouterHooksDemo from './components/RouterHooksDemo'
 import Dashboard from './components/Dashboard'
 import {Signup} from './components/validation/Signup'
 import MatLogin from './components/matLoginValidate/MatLogin'
 import ProtectedRoutes from './ProtectedRoutes'
 import App from './App'

 
 function Routers() {
  return (
    <div>
         <BrowserRouter basename='/sample'>  
           <Routes>
           <Route path='/' element={<Register/>} exact={true} /> 
            <Route path='/dashboard' element={<Dashboard/>}   >
                <Route path='contextdemo' element={<ContextDemo/>} /> 
                <Route path='showdemo' element={<Showdemo/>}   /> 
                <Route path='interaction' element={<ProtectedRoutes Component= {Parent}/>} /> 
                <Route path='signup' element={<Signup/>} /> 
                <Route path='login' element={<MatLogin/>} /> 
                <Route path='fetch' element={<ProtectedRoutes Component= {Fetch}/>} />
                <Route path='fetch/:id' element={<RouterHooksDemo/>} /> 
              </Route> 
          </Routes>  
          </BrowserRouter>
        </div>
  )
}

export default Routers