import {Routes, Route, Link} from "react-router-dom";
import { useParams } from "react-router";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "./components/Hero";
import Form from "./components/Form";
import Error from "./components/Error";
//Remember, we can write these functional components in their own files 
//to be exported and imported to the App component.
//We've combined them here to simplify our example.

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Routing with heroes </h1>
        <Link to="/hero" >Go to Hero Page</Link>
        <Link to="/SearchHero" >Go to Form</Link>
        <hr />
        <Routes>
          <Route path="/hero/:heroId" element={<Hero />} />

          <Route path="/SearchHero" element ={<Form />} />

          <Route path="/error" element ={<Error />} />
        </Routes>
      </header>
    </div>
  );
}
    
export default App