import Routers from './routes' 
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js'; 
import Dashboard from './components/Dashboard'
import './style.css'

function App() {
  return (
    <div className="App">
      
              {/* <nav className="navbar navbar-expand-lg bg-light" style={{backgroundColor: '#e3f2fd',}}> */}
         <Routers/>       
    </div>
  );
}

export default App;

