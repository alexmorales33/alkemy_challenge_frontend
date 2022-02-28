import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import { useContext } from 'react';
import { CartContext } from '../../CartContex/CartContext';
import "./ResultOrden.css";


const CartOrden =()=>{
    const {pedidoVegano, pedidoNoVegano, removeItem } = useContext(CartContext);
    
    let totalPrecio = 0;
    let tiempoEspera = 0;
    let healthScore = 0;

    const sumarTotal =(i)=>{
        totalPrecio += i.pricePerServing;
        
    }

    const calculoEspera =(i)=>{
        tiempoEspera += parseInt(i.readyInMinutes);
    }

    const totalHealth = (i)=>{
        healthScore += i.healthScore;
    }

        return (
                <Container>
                    <div>
                        <h2>Vegan Menu</h2>
                    </div>

                    <Row className='m-3'>
                        {pedidoVegano.map((i=>{
                           sumarTotal(i.item)
                           calculoEspera(i.item)
                           totalHealth(i.item)
                            return(
                                <Card className='card-first' style={{ width: '18rem' }}>
                                    <div className='img-container'>
                                        <Card.Img className='card-image' variant="top" src={i.item.image}  />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className='card-title'>{i.item.title}</Card.Title>
                                        <div className='contain-value'>
                                            <p className='text'><i className="fa-solid fa-dollar-sign"></i> {i.item.pricePerServing}</p> 
                                            <p className='text'><i className="fa-solid fa-heart"></i> {i.item.healthScore}</p> 
                                            <p className='text'><i className="fa-solid fa-clock"></i> {i.item.readyInMinutes}</p> 
                                        </div>
                                        <div>
                                            <Button onClick={()=> removeItem(i.item)}  variant="danger"><i className="fa-solid fa-trash"></i> Delete</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        }))}
                    </Row>  
                    
                    <div className='contain-vegant' >
                        <h2>Vegan't Menu</h2>
                    </div>

                    <Row className='m-3'>
                        {pedidoNoVegano.map((i=>{
                            sumarTotal(i.item)
                            calculoEspera(i.item)
                            totalHealth(i.item)
                            return(
                                <Card className='card-first' style={{ width: '18rem' }}>
                                    <div className='img-container'>
                                        <Card.Img className='card-image' variant="top" src={i.item.image}  />
                                    </div>
                                    <Card.Body>
                                        <Card.Title>{i.item.title}</Card.Title>
                                        <div className='contain-value'>
                                            <p className='text'><i className="fa-solid fa-dollar-sign"></i> {i.item.pricePerServing}</p> 
                                            <p className='text'><i className="fa-solid fa-heart"></i> {i.item.healthScore}</p> 
                                            <p className='text'><i className="fa-solid fa-clock"></i> {i.item.readyInMinutes}</p> 
                                        </div>
                                        <div>
                                            <Button onClick={()=> removeItem(i.item)}  variant="danger"><i className="fa-solid fa-trash"></i> Delete</Button>
                                        </div>
                                    </Card.Body>
                                </Card>
                            )
                        }))} 

                    </Row>
                    
                    <Row className='results-row'>
                        <Card>
                            <Card.Header as="h5">Current Menu</Card.Header>
                            <Card.Body>
                                <Card.Title>Total price: {totalPrecio}</Card.Title>
                                <Card.Title>Total health score: {healthScore} </Card.Title>
                                <Card.Title>Total preparation time: {tiempoEspera} minutes </Card.Title>
                            </Card.Body>
                        </Card>
                    </Row>
                    
                </Container>
    )
}

export default CartOrden;