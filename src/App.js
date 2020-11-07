import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Switch, Route} from "react-router-dom"
import Menu from './Layout/Menu'
import Home from './pages/Home'

function App() {
  const [opcionesMenu, setOpcionesMenu] = useState([]);

  useEffect(()=>{
    console.log('APP componentDidMount - hook equivalente');
    setOpcionesMenu([
      {
        "path":"/",
        "label":"Home"
      },
      {
        "path":"/api",
        "label":"Api"
      }]);

   }, []);

    return (
        <>
        <BrowserRouter>
          <Menu data={opcionesMenu}></Menu>
            <Switch>
              <Route path="/" exact component={Home} />  
            </Switch>
          
            
          </BrowserRouter>
        </>
    );
}


export default App;
