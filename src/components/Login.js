import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { loginEmailPassword, loginGoogle, loginFacebook } from '../actions/actionLogin'

import { FaFacebook, FaGoogle } from 'react-icons/fa';
import { BtnFacebook, BtnGoogle, DivStyled } from './styles/Login.styled';

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch();

    const [alert, setAlert] = useState(false);
    const [validacion, setValidacion] = useState('true')


    const [values, handleInputChange] = useForm({
        email: '',
        password: ''
    })

    const { email, password } = values;

    const handleLogin = (e) => {
        e.preventDefault();
        
            dispatch(loginEmailPassword(email, password));
            setAlert(true)
            navigate('/contenido');
            
    }

    const handleGoogle = () => {
        dispatch(loginGoogle());
    }

    const handleFacebook = () => {
        dispatch(loginFacebook());
    }

    return (
        <>
            <DivStyled>
                <Form onSubmit={handleLogin}>
                    <Link to='/Home'>
                        <img src='/images/logo-amazon.png' alt='' />
                    </Link>
                    <h2>Iniciar sesión</h2>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />

                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={password}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                    <Button variant="secondary" type="submit">
                        Continuar
                    </Button>
                    {alert && <span style={{ color: 'red' }}>Contraseña o correo iválido</span>}


                    <Container >
                        <Container
                            onClick={handleGoogle}
                        >
                            <Container>
                                <BtnGoogle>Iniciar con Google
                                    <FaGoogle size={'25px'} />
                                </BtnGoogle>
                            </Container>
                        </Container>

                        <Container
                            onClick={handleFacebook}
                        >
                            <Container >
                                <BtnFacebook>Iniciar con Facebook
                                    <FaFacebook size={'25px'} />
                                </BtnFacebook>

                            </Container>
                        </Container>
                    </Container>
                    <Link to="/registro">
                        <button>Crea tu cuenta de Amazonas</button>
                    </Link>
                    <br />
                    <p>Al continuar, aceptas las Condiciones de uso y el Aviso de privacidad de Amazonas.</p>
                    <ul>
                        <li>Condiciones de uso</li>
                        <li>Aviso de privacidad</li>
                        <li>Ayuda</li>
                    </ul>
                    <p>© 1992-2022 Amazonas.com, Inc</p>
                </Form>
            </DivStyled>
        </>
    );
}

export default Login;
