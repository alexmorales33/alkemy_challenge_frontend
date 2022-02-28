import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const Login =()=>{

    const url = 'http://challenge-react.alkemy.org/';

    const [datos, setDatos] = useState({
        form:{
            'email': '',
            'password': ''
        },
        error: false,
        errorMsj: ''
    });
    
    const manejadorFormulario =(e)=>{
        e.preventDefault();
    }

    const guardarDatos = async e =>{
        await setDatos({
            form:{
                ...datos.form,
                [e.target.name] : e.target.value
            }
        })
    }

    const navigate = useNavigate();
    
    const btnLogin =()=>{
        setDatos({error:false})
        axios.post(url, datos.form)
        .then(res=>{
            if(res.statusText === 'OK'){
                console.log('confirmado el login')
                localStorage.setItem('token', res.data.token);
                navigate('/inicio');
            }else{
                setDatos({
                    error: true,
                    errorMsj: res.response.data.error
                })
            }
            
        }).catch(e => {
            if (!e)return
            setDatos({
                error: true,
                errorMsj: e.response.data.error
            })
        })
    }

    return (
        <React.Fragment>
            <div className="container contain-login">
                <div className='col-md-6'>
                    <h1 className='text-center p-4' text='light'>Login</h1> 
                    <Form type='submit' onSubmit={manejadorFormulario}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>User:</Form.Label>
                        <input className='form-control'  name='email' type="email"  onChange={guardarDatos} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password:</Form.Label>
                        <input className='form-control'  name='password' type="password"  onChange={guardarDatos} />
                    </Form.Group>
                
                    <Button variant="dark" type="submit" onClick={()=> btnLogin() }>
                        Login
                    </Button>
                    {datos.error === true &&
                        <Alert className='mt-3'  variant='danger'>
                            {datos.errorMsj}
                        </Alert>
                    }

                    </Form>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Login