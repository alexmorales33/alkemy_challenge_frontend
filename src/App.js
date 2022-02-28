import React from 'react';
import { Routes, Route } from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home/Home';
import MenuVegan from './components/MenuVegan/MenuVegan';
import MenuVegant from './components/MenuVegant/MenuVegant';
import ItemDetail from './components/ItemDetail/ItemDetail';
import {CartProvider} from './CartContex/CartContext'



function App() {

    return (
        <CartProvider>
            
            <Routes> 
                <Route path="/" exact element= {<Login />} />
                <Route path="/inicio" exact element= {<Home />} />
                <Route path="/vegan" exact element= {<MenuVegan />} />
                <Route path="/meat" exact element= {<MenuVegant />} />
                <Route path='item/:id' element={<ItemDetail/>} />
            </Routes>
            
        </CartProvider>
    );
}

export default App;

