import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useForm } from '../hooks/useForm';
import { useDispatch } from 'react-redux';
import { registroEmailPasswordNombre } from '../actions/actionRegister';
import { DivStyledRegistro } from './styles/Registro.Styled';



export const Registro = () => {



    const dispatch = useDispatch();

    const [values, handleInputChange] = useForm({
        nombre: '',
        email: '',
        pass1: '',
        pass2: ''
    })

    const { nombre, email, pass1, pass2 } = values;


    const handleRegistro = e => {
        e.preventDefault();
        dispatch(registroEmailPasswordNombre(email, pass1, nombre))
    }

    return (
        <div>
            <DivStyledRegistro>
                <Form onSubmit={handleRegistro}>
                    <Link to='/Home'>
                        <img src='/images/logo-amazon.png' alt='' />
                    </Link>
                    <h2>Registro</h2>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su nombre"
                            name="nombre"
                            value={nombre}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese su email"
                            name="email"
                            value={email}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Contraseña"
                            name="pass1"
                            value={pass1}
                            onChange={handleInputChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicRepitPassword">
                        <Form.Label></Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confrimar contraseña"
                            name="pass2"
                            value={pass2}
                            onChange={handleInputChange}
                        />
                    </Form.Group>


                    <Button variant="primary" type="submit">
                        Registrarse
                    </Button>

                    <Link to="/Login">
                        <button>Login</button>
                    </Link>

                </Form>
            </DivStyledRegistro>
        </div>
    )
}