import React, { useContext } from 'react';
import { CartContext } from '../../CartContex/CartContext';
import Container from 'react-bootstrap/Container';
import ResultOrden from '../ResultOrden/ResultOrden';

const Orden =()=>{
    const {pedidoVegano, pedidoNoVegano, checkLogin } = useContext(CartContext);

    return(
        <Container>
            {checkLogin}

            
            <h1>Order:</h1>
            
            {
            pedidoVegano.length === 0 & pedidoNoVegano.length === 0
            ?
            <Container>
                <p>You did not add any menu</p>
            </Container>
            :
            <ResultOrden /> 
            }
                
           
        </Container>
        )


}

export default Orden;