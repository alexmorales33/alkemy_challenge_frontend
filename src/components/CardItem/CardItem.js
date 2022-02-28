import React from 'react';
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import "./CardItem.css";

const CartItem =({item})=>{
    return(
        
                <Col  className='card-column' md={3}>
                    <Card className='card-primary' style={{ width: '18rem', height: 'auto' }}>
                        <div className='img-contain'>
                            <Card.Img className='card-img' variant="top" src={item.image} />
                        </div>
                        <Card.Body>
                            <Card.Title className='cardtitle' >{item.title}</Card.Title>
                            <Link to={`/item/${item.id}`} key= {item.id}>
                                <Button variant="primary">Ver Descripcion</Button>
                            </Link>
                        </Card.Body>
                    </Card> 
                </Col>           
        
    )
}

export default CartItem;