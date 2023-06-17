import React from 'react';
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar.component";
import ExercisesList from "./components/ExercisesList.component";
import EditExercise from "./components/EditExercise.component";
import CreateExercise from "./components/CreateExercise.component";
import CreateUser from "./components/CreateUser.component"

function App() {
  return (
    <BrowserRouter>
    <div className = "container">
        <Navbar />
        <br />
        <Routes>
          <Route path = "/" element = {<ExercisesList />} />
          <Route path = "/edit/:id" element = {<EditExercise />} />
          <Route path = "/create" element = {<CreateExercise />} />
          <Route path = "/user" element = {<CreateUser />} />
        </Routes>
    </div>
          
           
    </BrowserRouter>
 
  );
}

export default App;
