import React from 'react'
import "./App.css"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Header } from "./MyComponents/Header.js";
import { Route,Switch } from "react-router-dom";
import { Product } from './MyComponents/Product';
import { Download } from './MyComponents/Download';
import { Pricing } from './MyComponents/Pricing';


const App = () => {
  return (
    <>
    <Header/>
    <Switch>
    <Route exact path="/" component={Product}/>
    <Route path="/download" component={Download}/>
    <Route path="/pricing" component={Pricing}/>
    </Switch>
  
</>
  )
}

export default App
