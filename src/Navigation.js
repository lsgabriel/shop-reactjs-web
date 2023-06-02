import React from "react";
import {Route, Routes} from 'react-router-dom';

import Home from "./pages/Home";
import Login from "./pages/Login";
import Details from "./pages/Details";
import Cart from "./pages/Cart";

const Navigation = () =>{
    return(
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>} />
            <Route path='/details' element={<Details/>} />
            <Route path='/cart' element={<Cart/>} />
        </Routes>
    );
}

export default Navigation;