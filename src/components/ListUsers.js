import React, { useEffect, useState } from 'react';
import { table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUsers, editUsers } from '../actions/actionUsers';
import EditarUsuarios from './EditarUsuarios';
import { Img, DivTable, ButtonDele, ButtonEdit, Table, DivBuscar } from './styles/ListUser.Styled';

export const ListUsers = () => {

    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);
    const [sendData, setSendData] = useState([])

    const { users } = useSelector(state => state.users);
    // console.log(users);


    const editar = (email) => {

        const showUsuarios = users.find(u => u.email === email)
        setModal(true)
        setSendData(showUsuarios)

    }

    useEffect(() => {
        dispatch(editUsers())
    }, [])


    const [buscar, setBuscar] = useState('');
    console.log(buscar)

    const clave = ['nombres', 'username', 'cedula', 'tarjeta', 'celular', 'direccion', 'email']



    return (
        <>
            <DivBuscar>
                <input
                    type='text'
                    placeholder='Search...'
                    onChange={(e) => setBuscar(e.target.value)}
                />
            </DivBuscar>
            <DivTable>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Imagen</th>
                            <th>Nombres</th>
                            <th>Username</th>
                            <th>Cedula</th>
                            <th>Tarjeta de Credito</th>
                            <th>Celular</th>
                            <th>Dirección</th>
                            <th>E-mail</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users ?
                                users.filter(data =>
                                    clave.some(clave =>
                                        data[clave].toLowerCase().includes(buscar.toLowerCase()))).map((item, index) => (
                                            <tr key={index}>
                                                <td><Img src={item.img} alt='' /></td>
                                                <td>{item.nombres}</td>
                                                <td>{item.username}</td>
                                                <td>{item.cedula}</td>
                                                <td>{item.tarjeta}</td>
                                                <td>{item.celular}</td>
                                                <td>{item.direccion}</td>
                                                <td>{item.email}</td>

                                                <td>
                                                    <ButtonDele onClick={() => dispatch(deleteUsers(item.email))}>Eliminar</ButtonDele>
                                                </td>
                                                <td>
                                                    <ButtonEdit onClick={() => editar(item.email)}>Editar</ButtonEdit>
                                                </td>

                                            </tr>
                                        ))
                                :
                                <p>Datos no disponibles</p>
                        }

                    </tbody>
                </Table>
            </DivTable>

            <div>

                {
                    modal === true ? <EditarUsuarios modal={sendData} /> : ''
                }
            </div>
        </>
    )

}

