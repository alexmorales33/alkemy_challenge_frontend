import React, { createContext, useState } from "react";
import { useNavigate } from 'react-router-dom';

export const CartContext = createContext([]);

export const CartProvider =({children})=>{

    const [pedidoVegano, setPedidoVegano] = useState([]);
    const [pedidoNoVegano, setPedidoNoVegano] = useState([]);
    
    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const checkLogin =()=>{
        if (!token){
            return(
                navigate('/')
                )
        }
    }
    

    const addItem =(item)=>{
            if(item.vegan){
                pedidoVegano.length < 2 ? setPedidoVegano([...pedidoVegano, {item}]) : alert('No se pueden agregar mas de dos pedidos veganos')
            }else{

                pedidoNoVegano.length < 2 ? setPedidoNoVegano([...pedidoNoVegano, {item}]) : alert('No se pueden agregar mas de dos pedidos no veganos')
            }    
    }

    const removeItem =(it)=>{
        console.log(it)
        if(it.vegan){
            setPedidoVegano(pedidoVegano.filter(item => item.item.id !== it.id)) 
        }
        else{
            setPedidoNoVegano(pedidoNoVegano.filter(item => item.item.id !== it.id))
        }
    }

    const limpiarOrden =()=>{

    }
    
    const datos = { pedidoVegano, pedidoNoVegano ,checkLogin, addItem, removeItem, limpiarOrden}

    return(
        <CartContext.Provider value={datos}>
            {children}
        </CartContext.Provider>
    )
}