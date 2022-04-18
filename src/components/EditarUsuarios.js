import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useForm } from '../hooks/useForm';
import { editUsers } from '../actions/actionUsers';
import { Form, Modal, ModalBody } from 'react-bootstrap';
import { DivForm } from './styles/Contenido.Styled';


const EditarUsuarios = ({ modal }) => {

    const dispatch = useDispatch();
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);


    const [values, handleInputChange] = useForm({
        cedula: modal.cedula,
        nombres: modal.nombres,
        username: modal.username,
        tarjeta: modal.tarjeta,
        celular: modal.celular,
        direccion: modal.direccion,
        email: modal.email,
    })

    const { cedula, nombres, username, tarjeta, celular, direccion, email } = values;

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editUsers(email, values))
        // console.log(values)
    }

    return (

        <div>
            <>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Actualizar datos</Modal.Title>
                    </Modal.Header>
                    <ModalBody>
                        <DivForm onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Cédula</Form.Label>
                                <Form.Control type="text" name="cedula" placeholder="Enter nombre" value={cedula} onChange={handleInputChange} />

                                <Form.Label>Nombres</Form.Label>
                                <Form.Control type="text" name="nombres" placeholder="Nombres" value={nombres} onChange={handleInputChange} />

                                <Form.Label>Username</Form.Label>
                                <Form.Control type="text" name="username" placeholder="UserName" value={username} onChange={handleInputChange} />

                                <Form.Label>Tarjeta de Crédito</Form.Label>
                                <Form.Control type="text" name="tarjeta" placeholder="XXX - XXX - XXX" value={tarjeta} onChange={handleInputChange} />

                                <Form.Label>Celular</Form.Label>
                                <Form.Control type="text" name="celular" placeholder="57 +" value={celular} onChange={handleInputChange} />

                                <Form.Label>Dirección</Form.Label>
                                <Form.Control type="text" name="direccion" placeholder="Dirección" value={direccion} onChange={handleInputChange} />

                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" placeholder="email" value={email} onChange={handleInputChange} />

                            </Form.Group>

                            <button variant="secondary" onClick={handleClose}>
                                Close
                            </button>
                            <button type="submit" variant="primary" onClick={handleSubmit}>
                                Save
                            </button>
                        </DivForm>

                    </ModalBody>

                </Modal>
            </>
        </div>
    )
}

export default EditarUsuarios