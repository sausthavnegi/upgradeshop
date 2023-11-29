import React, { StrictMode, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./common/NavigationBar/navbar";

import Home from "./components/Home";
import Login from "./components/Login/login";
import Product from "./components/Products/product";
import Add_Products from "./components/Products/add-product";
import Signup from "./components/Login/Signup";

function App() {
   const [isLoggedIn,setIsLoggedIn]= useState(false)
   const [isAdmin,setIsAdmin] =useState(false)

    return (
    
   <Router>
    <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} isAdmin={isAdmin}/>
    <Routes> 
          <Route exact path ="/" element={<Login setIsLoggedIn={setIsLoggedIn}  setIsAdmin={setIsAdmin}/>}/>
          <Route path="/add-product" element={<Add_Products/>}/>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}  setIsAdmin={setIsAdmin}/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/product" element={<Product/>}/>
          
    </Routes>

    </Router>
    
    
       

    )
}

export default App;