import React from 'react';
import './App.css';
import NavBar from "./components/NavBar";
import ListPostComponent from "./components/ListPostComponent";

function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <ListPostComponent></ListPostComponent>
    </div>
  );
}

export default App;
