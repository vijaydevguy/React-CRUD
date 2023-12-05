import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Create from './Components/Create';
import Read from './Components/Read'
import Update from './Components/Update'
import Home from './Components/Home';

function App() {
 
  return (
    <div className="main">
      <h2>CRUD operation</h2>
      <BrowserRouter>
        <Routes>
          <Route exact path="/create" element={<Create />}>
          </Route>
          <Route exact path="/read" element={<Read />}>
          </Route>
          <Route exact path="/update" element={<Update />}>
          </Route>
        </Routes>
        <hr/>
  
        <Home />
      </BrowserRouter>
      
    </div>
  );
}

export default App;
