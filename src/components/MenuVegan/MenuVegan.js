import React, { useContext, useEffect, useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardItem from '../CardItem/CardItem'
import { CartContext } from '../../CartContex/CartContext';


const ListVegan =()=>{
    const [prodVegan, setProdVegan] = useState([]);
    const {checkLogin } = useContext(CartContext);

    const url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=69c5d92f3abc414195236450d56474f8&query=vegan';

    
    

    useEffect(() => {
        fetch(url)
        .then(res  => res.json())
        .then(data => {
            setProdVegan(data.results);
        })
        .catch(e => console.log(e))
    },[])

   
    
    

    return(
        <div>
            <NavBar />
            {checkLogin()}
          { 
            <Container className='container'>
                <Row className=''>
                {
                    prodVegan.map((item=>{
                        return(
                            <CardItem key={item.id} item={item}/>
                        )
                    }))
                }   

                </Row>
            </Container>    
            } 
        </div>
    )
}

export default ListVegan;