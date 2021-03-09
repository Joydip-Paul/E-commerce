import React from 'react'
import logo from './logo.svg';
import './App.css'
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="Container">
        
        <Shop></Shop>
      </div>
    </div>
  );
}

export default App;
