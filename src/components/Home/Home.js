import React, { useContext } from "react";
import { CartContext } from "../../CartContex/CartContext";
import NavBar from '../NavBar/NavBar';
import Orden from "../Orden/Orden";

const Home =()=>{

    const {checkLogin } = useContext(CartContext);

    return(
        <>
            {checkLogin()}
            <NavBar />
            <Orden />
        </>
    );
}

export default Home;