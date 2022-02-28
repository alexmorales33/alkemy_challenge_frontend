import React, { useContext, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import { useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../../CartContex/CartContext';
import NavBar from '../NavBar/NavBar';
import Button from 'react-bootstrap/Button';
import './ItemDetail.css'
import { Col, Row } from 'react-bootstrap';

const ItemDetail =(item)=>{

    const [detalle, setDetalle] = useState([]);
    const {id} = useParams();
    const { addItem, checkLogin} = useContext(CartContext);

    const navigate = useNavigate();

    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=69c5d92f3abc414195236450d56474f8&includeNutrition=false`;
    
    useEffect(() => {
        fetch(url)
        .then(res  => res.json())
        .then(data => {
            setDetalle(data)
        })
        .catch(e => console.log(e))
    },[]);
    
    

    return(
        <>
        {checkLogin()}
        <NavBar />
        <Card className='card-first' style={{ width: 'auto', margin: 'auto auto' }}>
            <Card.Img variant="top" className='cardimg' style={{ width: '20rem', margin: 'auto auto' }} src={detalle.image} />
            <Card.Body>
                <Card.Title>{detalle.title}</Card.Title>
                <Row className='primary-row'>
                    <Col className='column-value' md={4}>
                        <p className='text'><i className="fa-solid fa-dollar-sign"></i> {detalle.pricePerServing}</p> 
                    </Col>
                    <Col className='column-value' md={4}>
                        <p className='text'><i className="fa-solid fa-heart"></i> {detalle.healthScore}</p>
                    </Col>
                    <Col className='column-value' md={4}>
                        <p className='text'><i className="fa-solid fa-clock"></i> {detalle.readyInMinutes}</p>
                    </Col>
                 </Row>               
            </Card.Body>

            <Card.Body>
                <Row>
                    <Col className='column-text' md={12}>
                        <p>
                            {detalle.summary}
                        </p>
                    </Col>
                </Row>
                <Button variant="success" onClick={()=> addItem(detalle)}><i className="fa-solid fa-plus"></i> Add</Button>{' '}
                <Button variant="primary" onClick={()=>{navigate('/inicio');}}>My Order</Button>{' '}

            </Card.Body>
        </Card>

        </>
    )
}

export default ItemDetail;