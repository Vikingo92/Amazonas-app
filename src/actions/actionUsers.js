import { typesUsers } from '../types/types';
import { db } from '../firebase/firebaseConfig';
import { addDoc, collection, deleteDoc, getDocs, query, where, doc, updateDoc } from 'firebase/firestore';

// // Funcion - Asincrona (Accion)
export const editUsers = (email, users) => {
    return async(dispatch) => {
        const usersCollection = collection(db, 'Usuarios');
        const q = query(usersCollection, where('email', '==', email))

        const data = await getDocs(q)
        let id 
        data.forEach(item => {
           id = item.id

        })
        // console.log(id)
        
        const referencia = doc(db, 'Usuarios', email);
        await updateDoc(referencia, users)
        .then(res => {
            // console.log(res)
        })
        .catch(error => {
            console.log(error)
        })
        dispatch(Edit(users))
        dispatch(listUsers())

    }
}
//Funcion -  Editar usuarios (Sincrona)
export const Edit = (users) => {
    return {
        type: typesUsers.edit,
        payload: users
    }
}

// Funcion Asincrona (Accion)
export const deleteUsers = (email) => {
    return async(dispatch) => {
        const usersCollection = collection(db, 'Usuarios');
        const q = query(usersCollection, where('email', '==', email))
        
        const  data = await getDocs(q);
        data.forEach(item => {
            deleteDoc(doc(db, 'Usuarios', item.id))
        })
        dispatch(Delete(email));
    }
}


// Funcion -  Eliminar usuarios (Sincrona)
export const Delete = (email) => {
    return {
        type: typesUsers.delete,
        payload: email
    }
}



// Funcion -  Accion = Asincrona
export const listUsers = () => {
    return async(dispatch) => {
        const data = await getDocs(collection(db, 'Usuarios'))
        
        const usuarios = []
        data.forEach(doc => {
           usuarios.push({
               ...doc.data(),
           })
        })
        dispatch(List(usuarios))
    }
}

// Listar usuarios. - Accion sincrona
export const List = (users) => {
    return{
        type: typesUsers.list,
        payload: users
    }
}




// Accion - Funcion asincronica -- Creacion o agregar usuarios.
export const userAddAsincrono = (cedula, nombres, username, tarjeta , celular, direccion, email, img) => {
    return (dispatch) => {
        const newUser = {
            cedula,
            nombres,
            username,
            tarjeta,
            celular,
            direccion,
            email,
            img
        }
        addDoc(collection(db, 'Usuarios'), newUser)
            .then(resp => {
                dispatch(userAddSincrono(newUser))
            })
            .catch(error => {
                console.log(error);
            })
    }
}



// Crear la accion funcion sincronica - Agregar.
export const userAddSincrono = (users) => {
    return {
        type: typesUsers.register,
        payload: users
    }
}
