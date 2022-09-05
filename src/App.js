 import React from "react";
 import Student from "./pages/Student";
 import AddStudent from  "./pages/AddStudent";
 import EditStudent from  "./pages/EditStudent"; 
 import ViewStudent from  "./pages/ViewStudent"; 

  import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
 
function App() 
{ 
  return (
    
    <Router>
      <Routes>
        <Route exact path="/"  element={<Student />}></Route>
        <Route exact path="/add-student"  element={<AddStudent />}></Route>      
        <Route exact path="/edit/:id"  element={<EditStudent  />} ></Route>  
        <Route exact path="/update/:id"  element={<EditStudent  />} ></Route> 
        <Route exact path="/delete/:id"  element={<Student  />} ></Route>   
        <Route exact path="/view/:id"  element={<ViewStudent  />} ></Route> 

       </Routes>
      </Router>
  );
}
export default App;
