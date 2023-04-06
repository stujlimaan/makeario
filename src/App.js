import './App.css';
import AddUser from './Components/AddUser';
import Navbar from './Components/Navbar';
import AllUsers from './Components/AllUsers';
import Crud from './Components/Crud';
import {BrowserRouter,Route, Routes} from "react-router-dom"
import EditUser from './Components/EditUser';


function App() {
  return (
    <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path="/add" element={<AddUser/>}  />
      <Route path="/all"  element={<AllUsers/>}  />
      <Route path="/edit/:id"  element={<EditUser/>}  />
      <Route path="/"  element={<Crud/>}  />
     
     
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
